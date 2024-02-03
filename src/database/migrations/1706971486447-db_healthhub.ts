import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1706971486447 implements MigrationInterface {
    name = 'DbHealthhub1706971486447'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admin\` DROP FOREIGN KEY \`FK_ce85452783cae9e86a649066f91\``);
        await queryRunner.query(`DROP INDEX \`IDX_ce85452783cae9e86a649066f9\` ON \`admin\``);
        await queryRunner.query(`DROP INDEX \`REL_ce85452783cae9e86a649066f9\` ON \`admin\``);
        await queryRunner.query(`ALTER TABLE \`admin\` CHANGE \`entityUserEntityUserId\` \`userProfileUserId\` int NULL`);
        await queryRunner.query(`CREATE TABLE \`user_profile\` (\`user_id\` int NOT NULL AUTO_INCREMENT, \`firstname\` varchar(50) NOT NULL, \`lastname\` varchar(50) NOT NULL, \`email\` varchar(100) NOT NULL, \`username\` varchar(50) NOT NULL, \`create_at\` timestamp NOT NULL, \`update_at\` timestamp NOT NULL, \`is_active\` bit NOT NULL, PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`credential\` (\`password_id\` int NOT NULL AUTO_INCREMENT, \`entity_user_id\` int NOT NULL, \`password_hash\` varchar(100) NOT NULL, \`password_salt\` varchar(100) NOT NULL, \`confirmation_token\` varchar(150) NOT NULL, \`token_generation_time\` timestamp NOT NULL, \`password_recovery_token\` varchar(150) NOT NULL, \`recovery_token_time\` timestamp NOT NULL, \`last_updated\` timestamp NOT NULL, \`userProfileUserId\` int NULL, UNIQUE INDEX \`REL_abea6374804d42a59b395fe2d2\` (\`userProfileUserId\`), PRIMARY KEY (\`password_id\`, \`entity_user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_entities\` (\`entity_profile_id\` int NOT NULL AUTO_INCREMENT, \`entity_user_id\` int NOT NULL, \`enity_user\` json NOT NULL, \`create_at\` timestamp NOT NULL, \`update_at\` timestamp NOT NULL, \`website_id\` int NOT NULL, \`is_active\` bit NOT NULL, PRIMARY KEY (\`entity_profile_id\`, \`entity_user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD UNIQUE INDEX \`IDX_8d59f8bcab459e79fd5cbcc77d\` (\`userProfileUserId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_8d59f8bcab459e79fd5cbcc77d\` ON \`admin\` (\`userProfileUserId\`)`);
        await queryRunner.query(`ALTER TABLE \`credential\` ADD CONSTRAINT \`FK_abea6374804d42a59b395fe2d2f\` FOREIGN KEY (\`userProfileUserId\`) REFERENCES \`user_profile\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD CONSTRAINT \`FK_8d59f8bcab459e79fd5cbcc77df\` FOREIGN KEY (\`userProfileUserId\`) REFERENCES \`user_profile\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admin\` DROP FOREIGN KEY \`FK_8d59f8bcab459e79fd5cbcc77df\``);
        await queryRunner.query(`ALTER TABLE \`credential\` DROP FOREIGN KEY \`FK_abea6374804d42a59b395fe2d2f\``);
        await queryRunner.query(`DROP INDEX \`REL_8d59f8bcab459e79fd5cbcc77d\` ON \`admin\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP INDEX \`IDX_8d59f8bcab459e79fd5cbcc77d\``);
        await queryRunner.query(`DROP TABLE \`user_entities\``);
        await queryRunner.query(`DROP INDEX \`REL_abea6374804d42a59b395fe2d2\` ON \`credential\``);
        await queryRunner.query(`DROP TABLE \`credential\``);
        await queryRunner.query(`DROP TABLE \`user_profile\``);
        await queryRunner.query(`ALTER TABLE \`admin\` CHANGE \`userProfileUserId\` \`entityUserEntityUserId\` int NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_ce85452783cae9e86a649066f9\` ON \`admin\` (\`entityUserEntityUserId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_ce85452783cae9e86a649066f9\` ON \`admin\` (\`entityUserEntityUserId\`)`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD CONSTRAINT \`FK_ce85452783cae9e86a649066f91\` FOREIGN KEY (\`entityUserEntityUserId\`) REFERENCES \`entity_user\`(\`entity_user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
