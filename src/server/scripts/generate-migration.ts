import { execSync, exec } from 'child_process'
import { resolve } from 'path'
import { writeFileSync, existsSync, unlinkSync } from 'fs'
import * as chokidar from 'chokidar'

async function main(): Promise<void> {
  try {
    const { entityName, operation } = getCommandLineArguments()
    await watchMigrationFile(resolve(__dirname, '../migrations'))
    const tempDataSourcePath = createTempDataSourceFile(entityName)
    generateMigration(operation, entityName, tempDataSourcePath)
    removeTempDataSourceFile(tempDataSourcePath)
  } catch (error) {
    if (error instanceof Error) {
      console.error(`[ERROR] ${error.message}`)
      return
    } else {
      console.log('不明なエラーが発生しました。')
      return
    }
  }
}

function getCommandLineArguments(): { entityName: string; operation: string } {
  const [entityName, operation] = process.argv.slice(2)

  if (!entityName || !operation) {
    throw new Error(
      'エンティティ名とマイグレーションの種類を引数で指定してください: 例）npx ts-node generate-migration.ts User CreateTable',
    )
  }

  return { entityName, operation }
}

function createTempDataSourceFile(entityFileName: string): string {
  const tempDataSourcePath = resolve(
    __dirname,
    `temp-data-source-${entityFileName}.ts`,
  )
  const entityPath = resolve(
    __dirname,
    `../app/domain/entities/${entityFileName}`,
  )

  // エンティティごとにマイグレーションするため個別のDB接続情報を設定
  const dataSourceContent = `
    import { DataSource } from 'typeorm'; 
    import { ${entityFileName} } from '${entityPath}'

    const dataSource = new DataSource({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'BookBase',
      synchronize: false,
      logging: false,
      entities: [${entityFileName}],
      migrations: [],
      subscribers: [],
      migrationsRun: false,
    })

    export default dataSource
  `

  writeFileSync(tempDataSourcePath, dataSourceContent)

  return tempDataSourcePath
}

function generateMigration(
  migrationAction: string,
  targetEntity: string,
  configurationFilePath: string,
): void {
  const migrationPath = resolve(
    __dirname,
    `../migrations/${migrationAction}_${targetEntity}s`,
  )
  const migrationCommand = `npx typeorm-ts-node-commonjs migration:generate ${migrationPath} -d ${configurationFilePath}`

  execSync(migrationCommand, { stdio: 'pipe' })
  console.log('[SUCCESS] マイグレーション完了')
}

function removeTempDataSourceFile(filePath: string): void {
  if (existsSync(filePath)) {
    unlinkSync(filePath)
  }
}

async function watchMigrationFile(directory: string): Promise<void> {
  const watcher = chokidar.watch(directory, {
    // 監視の継続
    persistent: true,
    // 既存ファイルの変更イベントを無視
    ignoreInitial: true,
  })

  await new Promise<void>((resolve) => {
    watcher.on('ready', () => {
      resolve()
    })
  })

  watcher.on('add', async (filePath: string) => {
    try {
      await formatFileWithPrettier(filePath)
    } finally {
      watcher.close()
    }
  })
}

function formatFileWithPrettier(filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(`prettier --write ${filePath}`, (error) => {
      if (error) {
        reject(new Error('Prettierの実行に失敗しました'))
      } else {
        resolve()
      }
    })
  })
}

main()
