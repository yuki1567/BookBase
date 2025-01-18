import path from 'path'
import fs from 'fs'
import { execSync } from 'child_process'

async function runSeeds(): Promise<void> {
  try {
    const seedDir = path.resolve(__dirname)
    const files = fs.readdirSync(seedDir).filter((file) => {
      return file !== 'runSeeds.ts'
    })

    if (files.length === 0) {
      console.log('実行するシードファイルが見つかりませんでした。')
      return
    }

    await Promise.all(
      files.map(async (file) => {
        console.log(`実行対象ファイル: ${file}`)
        const command = `npx ts-node -r tsconfig-paths/register infrastructure/database/seeds/${file} 5`
        execSync(command, { stdio: 'pipe' })
        console.log(`実行完了: ${file}`, command)
      }),
    )

    console.log('すべてのシードファイルの実行が完了しました。')
  } catch (error: unknown) {
    errorHandler(error)
  }
}

function errorHandler(error: unknown) {
  if (error instanceof Error) {
    console.error(`[ERROR] ${error.message}`)
    return
  } else {
    console.log('不明なエラーが発生しました。')
    return
  }
}

runSeeds()
