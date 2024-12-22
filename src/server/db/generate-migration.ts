import { execSync } from 'child_process'
import { resolve } from 'path'
import { writeFileSync, existsSync, unlinkSync } from 'fs'

const entityName = process.argv[2]
const operation = process.argv[3]
if (!entityName || !operation) {
  console.error(
    '[ERROR] エンティティ名とマイグレーションの種類を引数で指定してください: 例）ts-node generate-migration.ts User CreateTable',
  )
  process.exit(1)
}

const tempDataSourcePath = resolve(
  __dirname,
  `temp-data-source-${entityName}.ts`,
)
const entityPath = resolve(__dirname, `entities/${entityName}`)

const dataSourceContent = `
import { DataSource } from 'typeorm'; 
import { ${entityName} } from '${entityPath}'

const dataSource = new DataSource({
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'BookBase',
  synchronize: false,
  logging: false,
  entities: [${entityName}],
  migrations: [],
  subscribers: [],
  migrationsRun: false,
})

export default dataSource
`

writeFileSync(tempDataSourcePath, dataSourceContent)

const migrationDir = resolve(
  __dirname,
  `./migrations/${operation}_${entityName}s`,
)
const migrationCommand = `npx typeorm-ts-node-commonjs migration:generate ${migrationDir} -d ${tempDataSourcePath}`

try {
  const output = execSync(migrationCommand, { stdio: 'pipe' }).toString()
  console.log(output)
  console.log('[SUCCESS] マイグレーション完了')
} catch (error) {
  console.error(`[ERROR] ${error.message}`)
} finally {
  if (existsSync(tempDataSourcePath)) {
    unlinkSync(tempDataSourcePath)
  }
}
