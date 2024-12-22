import { execSync } from 'child_process'
import { resolve } from 'path'
import { writeFileSync, existsSync, unlinkSync } from 'fs'

function main(): void {
  const { entityName, operation } = getCommandLineArguments()
  const tempDataSourcePath = createTempDataSourceFile(entityName)
  generateMigration(operation, entityName, tempDataSourcePath)
  removeTempDataSourceFile(tempDataSourcePath)
}

function getCommandLineArguments(): { entityName: string; operation: string } {
  const entityName = process.argv[2]
  const operation = process.argv[3]

  if (!entityName || !operation) {
    console.error(
      '[ERROR] エンティティ名とマイグレーションの種類を引数で指定してください: 例）ts-node generate-migration.ts User CreateTable',
    )
    process.exit(1)
  }

  return { entityName, operation }
}

function createTempDataSourceFile(entityFileName: string): string {
  const tempDataSourcePath = resolve(
    __dirname,
    `temp-data-source-${entityFileName}.ts`,
  )
  const entityPath = resolve(__dirname, `entities/${entityFileName}`)

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
    `./migrations/${migrationAction}_${targetEntity}s`,
  )
  const migrationCommand = `npx typeorm-ts-node-commonjs migration:generate ${migrationPath} -d ${configurationFilePath}`

  try {
    execSync(migrationCommand, { stdio: 'pipe' })
    console.log('[SUCCESS] マイグレーション完了')
  } catch (error) {
    console.error(`[ERROR] ${error.message}`)
  }
}

function removeTempDataSourceFile(removeFilePath): void {
  if (existsSync(removeFilePath)) {
    unlinkSync(removeFilePath)
  }
}

main()
