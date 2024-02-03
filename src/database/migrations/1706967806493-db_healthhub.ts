import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1706967806493 implements MigrationInterface {
    name = 'DbHealthhub1706967806493'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`website_strore\` (\`website_id\` int NOT NULL AUTO_INCREMENT, \`domain\` varchar(250) NOT NULL, \`is_active\` bit NOT NULL, PRIMARY KEY (\`website_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD \`adminIdEntityUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD UNIQUE INDEX \`IDX_640ca2762b5fe38779ea04e24e\` (\`adminIdEntityUserId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_640ca2762b5fe38779ea04e24e\` ON \`admin\` (\`adminIdEntityUserId\`)`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD CONSTRAINT \`FK_640ca2762b5fe38779ea04e24e1\` FOREIGN KEY (\`adminIdEntityUserId\`) REFERENCES \`entity_user\`(\`entity_user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admin\` DROP FOREIGN KEY \`FK_640ca2762b5fe38779ea04e24e1\``);
        await queryRunner.query(`DROP INDEX \`REL_640ca2762b5fe38779ea04e24e\` ON \`admin\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP INDEX \`IDX_640ca2762b5fe38779ea04e24e\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP COLUMN \`adminIdEntityUserId\``);
        await queryRunner.query(`DROP TABLE \`website_strore\``);
    }

}
