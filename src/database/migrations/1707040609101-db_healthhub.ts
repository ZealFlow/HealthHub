import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1707040609101 implements MigrationInterface {
    name = 'DbHealthhub1707040609101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_profile\` DROP COLUMN \`is_active\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_profile\` ADD \`is_active\` bit NOT NULL`);
    }

}
