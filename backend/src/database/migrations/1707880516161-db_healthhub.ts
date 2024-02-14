import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1707880516161 implements MigrationInterface {
    name = 'DbHealthhub1707880516161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`entities_role\` DROP COLUMN \`role_id\``);
        await queryRunner.query(`ALTER TABLE \`entities_role\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`entities_role\` ADD \`userProfileUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` ADD \`roleRoleId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` ADD CONSTRAINT \`FK_359c7da8d042e220cc2c38bdd38\` FOREIGN KEY (\`userProfileUserId\`) REFERENCES \`user_profile\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` ADD CONSTRAINT \`FK_b9c89b4d1f83614f7eedde396cb\` FOREIGN KEY (\`roleRoleId\`) REFERENCES \`role\`(\`role_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`entities_role\` DROP FOREIGN KEY \`FK_b9c89b4d1f83614f7eedde396cb\``);
        await queryRunner.query(`ALTER TABLE \`entities_role\` DROP FOREIGN KEY \`FK_359c7da8d042e220cc2c38bdd38\``);
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` DROP COLUMN \`roleRoleId\``);
        await queryRunner.query(`ALTER TABLE \`entities_role\` DROP COLUMN \`userProfileUserId\``);
        await queryRunner.query(`ALTER TABLE \`entities_role\` ADD \`user_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` ADD \`role_id\` int NOT NULL`);
    }

}
