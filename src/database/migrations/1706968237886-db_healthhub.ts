import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1706968237886 implements MigrationInterface {
    name = 'DbHealthhub1706968237886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admin\` DROP FOREIGN KEY \`FK_640ca2762b5fe38779ea04e24e1\``);
        await queryRunner.query(`DROP INDEX \`IDX_640ca2762b5fe38779ea04e24e\` ON \`admin\``);
        await queryRunner.query(`DROP INDEX \`REL_640ca2762b5fe38779ea04e24e\` ON \`admin\``);
        await queryRunner.query(`ALTER TABLE \`admin\` CHANGE \`adminIdEntityUserId\` \`entityUserEntityUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`entity_user_passwords\` ADD \`entityUserEntityUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`entity_user_passwords\` ADD UNIQUE INDEX \`IDX_2b177ad827655437b6beb94ef2\` (\`entityUserEntityUserId\`)`);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP COLUMN \`admin_id\``);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD \`admin_id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD UNIQUE INDEX \`IDX_ce85452783cae9e86a649066f9\` (\`entityUserEntityUserId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_ce85452783cae9e86a649066f9\` ON \`admin\` (\`entityUserEntityUserId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_2b177ad827655437b6beb94ef2\` ON \`entity_user_passwords\` (\`entityUserEntityUserId\`)`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD CONSTRAINT \`FK_ce85452783cae9e86a649066f91\` FOREIGN KEY (\`entityUserEntityUserId\`) REFERENCES \`entity_user\`(\`entity_user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entity_user_passwords\` ADD CONSTRAINT \`FK_2b177ad827655437b6beb94ef26\` FOREIGN KEY (\`entityUserEntityUserId\`) REFERENCES \`entity_user\`(\`entity_user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`entity_user_passwords\` DROP FOREIGN KEY \`FK_2b177ad827655437b6beb94ef26\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP FOREIGN KEY \`FK_ce85452783cae9e86a649066f91\``);
        await queryRunner.query(`DROP INDEX \`REL_2b177ad827655437b6beb94ef2\` ON \`entity_user_passwords\``);
        await queryRunner.query(`DROP INDEX \`REL_ce85452783cae9e86a649066f9\` ON \`admin\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP INDEX \`IDX_ce85452783cae9e86a649066f9\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP COLUMN \`admin_id\``);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD \`admin_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD PRIMARY KEY (\`admin_id\`)`);
        await queryRunner.query(`ALTER TABLE \`entity_user_passwords\` DROP INDEX \`IDX_2b177ad827655437b6beb94ef2\``);
        await queryRunner.query(`ALTER TABLE \`entity_user_passwords\` DROP COLUMN \`entityUserEntityUserId\``);
        await queryRunner.query(`ALTER TABLE \`admin\` CHANGE \`entityUserEntityUserId\` \`adminIdEntityUserId\` int NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_640ca2762b5fe38779ea04e24e\` ON \`admin\` (\`adminIdEntityUserId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_640ca2762b5fe38779ea04e24e\` ON \`admin\` (\`adminIdEntityUserId\`)`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD CONSTRAINT \`FK_640ca2762b5fe38779ea04e24e1\` FOREIGN KEY (\`adminIdEntityUserId\`) REFERENCES \`entity_user\`(\`entity_user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
