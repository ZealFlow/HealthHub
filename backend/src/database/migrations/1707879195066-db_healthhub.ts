import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1707879195066 implements MigrationInterface {
    name = 'DbHealthhub1707879195066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`credential\` (\`password_id\` int NOT NULL AUTO_INCREMENT, \`password_hash\` varchar(250) NOT NULL, \`password_salt\` varchar(250) NOT NULL, \`last_updated\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`password_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_entities\` (\`entity_id\` int NOT NULL AUTO_INCREMENT, \`enity_user\` json NOT NULL, \`create_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`is_active\` bit NOT NULL, \`userProfileUserId\` int NULL, UNIQUE INDEX \`REL_51353729c3e9cb1e78ccfcb7cd\` (\`userProfileUserId\`), PRIMARY KEY (\`entity_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admin\` (\`admin_id\` int NOT NULL AUTO_INCREMENT, \`userProfileUserId\` int NULL, UNIQUE INDEX \`REL_8d59f8bcab459e79fd5cbcc77d\` (\`userProfileUserId\`), PRIMARY KEY (\`admin_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_profile\` (\`user_id\` int NOT NULL AUTO_INCREMENT, \`firstname\` varchar(50) NULL, \`lastname\` varchar(50) NULL, \`email\` varchar(100) NULL, \`username\` varchar(50) NULL, \`create_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`is_active\` bit NOT NULL DEFAULT 1, \`credentialPasswordId\` int NULL, UNIQUE INDEX \`REL_03a5654dbab064e0fccc419cc5\` (\`credentialPasswordId\`), PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`role_id\` int NOT NULL AUTO_INCREMENT, \`role_name\` varchar(50) NOT NULL, PRIMARY KEY (\`role_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entities_role\` (\`entities_id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`role_id\` int NOT NULL, \`create_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`is_active\` bit NOT NULL DEFAULT 1, PRIMARY KEY (\`entities_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD CONSTRAINT \`FK_51353729c3e9cb1e78ccfcb7cdb\` FOREIGN KEY (\`userProfileUserId\`) REFERENCES \`user_profile\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD CONSTRAINT \`FK_8d59f8bcab459e79fd5cbcc77df\` FOREIGN KEY (\`userProfileUserId\`) REFERENCES \`user_profile\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_profile\` ADD CONSTRAINT \`FK_03a5654dbab064e0fccc419cc5b\` FOREIGN KEY (\`credentialPasswordId\`) REFERENCES \`credential\`(\`password_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_profile\` DROP FOREIGN KEY \`FK_03a5654dbab064e0fccc419cc5b\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP FOREIGN KEY \`FK_8d59f8bcab459e79fd5cbcc77df\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP FOREIGN KEY \`FK_51353729c3e9cb1e78ccfcb7cdb\``);
        await queryRunner.query(`DROP TABLE \`entities_role\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP INDEX \`REL_03a5654dbab064e0fccc419cc5\` ON \`user_profile\``);
        await queryRunner.query(`DROP TABLE \`user_profile\``);
        await queryRunner.query(`DROP INDEX \`REL_8d59f8bcab459e79fd5cbcc77d\` ON \`admin\``);
        await queryRunner.query(`DROP TABLE \`admin\``);
        await queryRunner.query(`DROP INDEX \`REL_51353729c3e9cb1e78ccfcb7cd\` ON \`user_entities\``);
        await queryRunner.query(`DROP TABLE \`user_entities\``);
        await queryRunner.query(`DROP TABLE \`credential\``);
    }

}
