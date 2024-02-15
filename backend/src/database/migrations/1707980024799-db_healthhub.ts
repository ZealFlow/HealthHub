import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1707980024799 implements MigrationInterface {
    name = 'DbHealthhub1707980024799'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_1476c2eca46cbd8a852f62846e\` ON \`user_profile\``);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_1476c2eca46cbd8a852f62846e\` ON \`user_profile\` (\`userEntitiesEntityId\`)`);
    }

}
