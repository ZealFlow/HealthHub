import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1708589977081 implements MigrationInterface {
    name = 'DbHealthhub1708589977081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_credential\` (\`password_id\` int NOT NULL AUTO_INCREMENT, \`password_hash\` varchar(250) NOT NULL, \`password_salt\` varchar(250) NOT NULL, \`last_updated\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`userEntitiesEntityId\` int NULL, UNIQUE INDEX \`IDX_8d702c04302bc47271cc5a00e3\` (\`userEntitiesEntityId\`), UNIQUE INDEX \`REL_8d702c04302bc47271cc5a00e3\` (\`userEntitiesEntityId\`), PRIMARY KEY (\`password_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_entities\` (\`entity_id\` int NOT NULL AUTO_INCREMENT, \`enity_user\` json NULL, \`create_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`is_active\` bit NOT NULL DEFAULT 1, \`userProfileUserId\` int NULL, UNIQUE INDEX \`REL_51353729c3e9cb1e78ccfcb7cd\` (\`userProfileUserId\`), PRIMARY KEY (\`entity_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admin_credential\` (\`password_id\` int NOT NULL AUTO_INCREMENT, \`password_hash\` varchar(250) NOT NULL, \`password_salt\` varchar(250) NOT NULL, \`last_updated\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`adminAdminId\` int NULL, UNIQUE INDEX \`IDX_081a4458014961bd9825a1d516\` (\`adminAdminId\`), UNIQUE INDEX \`REL_081a4458014961bd9825a1d516\` (\`adminAdminId\`), PRIMARY KEY (\`password_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admin\` (\`admin_id\` int NOT NULL AUTO_INCREMENT, \`userProfileUserId\` int NULL, UNIQUE INDEX \`REL_8d59f8bcab459e79fd5cbcc77d\` (\`userProfileUserId\`), PRIMARY KEY (\`admin_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`role_id\` int NOT NULL AUTO_INCREMENT, \`role_name\` varchar(50) NOT NULL, PRIMARY KEY (\`role_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entities_role\` (\`entities_id\` int NOT NULL AUTO_INCREMENT, \`create_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`is_active\` bit NOT NULL DEFAULT 1, \`userProfileUserId\` int NULL, \`roleRoleId\` int NULL, PRIMARY KEY (\`entities_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_profile\` (\`user_id\` int NOT NULL AUTO_INCREMENT, \`firstname\` varchar(50) NULL, \`lastname\` varchar(50) NULL, \`email\` varchar(100) NULL, \`username\` varchar(50) NULL, \`dateofbirth\` date NOT NULL, \`gender\` enum ('1', '2', '3') NOT NULL, \`create_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`is_active\` bit NOT NULL DEFAULT 1, PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_credential\` ADD CONSTRAINT \`FK_8d702c04302bc47271cc5a00e34\` FOREIGN KEY (\`userEntitiesEntityId\`) REFERENCES \`user_entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD CONSTRAINT \`FK_51353729c3e9cb1e78ccfcb7cdb\` FOREIGN KEY (\`userProfileUserId\`) REFERENCES \`user_profile\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admin_credential\` ADD CONSTRAINT \`FK_081a4458014961bd9825a1d5162\` FOREIGN KEY (\`adminAdminId\`) REFERENCES \`admin\`(\`admin_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD CONSTRAINT \`FK_8d59f8bcab459e79fd5cbcc77df\` FOREIGN KEY (\`userProfileUserId\`) REFERENCES \`user_profile\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` ADD CONSTRAINT \`FK_359c7da8d042e220cc2c38bdd38\` FOREIGN KEY (\`userProfileUserId\`) REFERENCES \`user_profile\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` ADD CONSTRAINT \`FK_b9c89b4d1f83614f7eedde396cb\` FOREIGN KEY (\`roleRoleId\`) REFERENCES \`role\`(\`role_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`entities_role\` DROP FOREIGN KEY \`FK_b9c89b4d1f83614f7eedde396cb\``);
        await queryRunner.query(`ALTER TABLE \`entities_role\` DROP FOREIGN KEY \`FK_359c7da8d042e220cc2c38bdd38\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP FOREIGN KEY \`FK_8d59f8bcab459e79fd5cbcc77df\``);
        await queryRunner.query(`ALTER TABLE \`admin_credential\` DROP FOREIGN KEY \`FK_081a4458014961bd9825a1d5162\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP FOREIGN KEY \`FK_51353729c3e9cb1e78ccfcb7cdb\``);
        await queryRunner.query(`ALTER TABLE \`user_credential\` DROP FOREIGN KEY \`FK_8d702c04302bc47271cc5a00e34\``);
        await queryRunner.query(`DROP TABLE \`user_profile\``);
        await queryRunner.query(`DROP TABLE \`entities_role\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP INDEX \`REL_8d59f8bcab459e79fd5cbcc77d\` ON \`admin\``);
        await queryRunner.query(`DROP TABLE \`admin\``);
        await queryRunner.query(`DROP INDEX \`REL_081a4458014961bd9825a1d516\` ON \`admin_credential\``);
        await queryRunner.query(`DROP INDEX \`IDX_081a4458014961bd9825a1d516\` ON \`admin_credential\``);
        await queryRunner.query(`DROP TABLE \`admin_credential\``);
        await queryRunner.query(`DROP INDEX \`REL_51353729c3e9cb1e78ccfcb7cd\` ON \`user_entities\``);
        await queryRunner.query(`DROP TABLE \`user_entities\``);
        await queryRunner.query(`DROP INDEX \`REL_8d702c04302bc47271cc5a00e3\` ON \`user_credential\``);
        await queryRunner.query(`DROP INDEX \`IDX_8d702c04302bc47271cc5a00e3\` ON \`user_credential\``);
        await queryRunner.query(`DROP TABLE \`user_credential\``);
    }

}
