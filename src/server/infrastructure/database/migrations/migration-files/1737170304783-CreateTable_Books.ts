import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableBooks1737170304783 implements MigrationInterface {
  name = 'CreateTableBooks1737170304783'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`books\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` text NULL, \`author\` varchar(255) NULL, \`author_biography\` text NULL, \`publisher\` varchar(255) NOT NULL, \`release_date\` date NULL, \`language\` varchar(50) NOT NULL, \`page_count\` int NOT NULL, \`isbn_13\` char(13) NULL, \`width\` float UNSIGNED NOT NULL, \`height\` float UNSIGNED NOT NULL, \`price\` int UNSIGNED NOT NULL, \`status\` int UNSIGNED NOT NULL, \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0), UNIQUE INDEX \`IDX_1080c2fda97cd9d763cd08638f\` (\`isbn_13\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_1080c2fda97cd9d763cd08638f\` ON \`books\``,
    )
    await queryRunner.query(`DROP TABLE \`books\``)
  }
}
