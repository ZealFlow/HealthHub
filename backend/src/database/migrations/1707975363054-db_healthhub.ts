import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1707975363054 implements MigrationInterface {
    name = 'DbHealthhub1707975363054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`admin_credential\` (\`password_id\` int NOT NULL AUTO_INCREMENT, \`password_hash\` varchar(250) NOT NULL, \`password_salt\` varchar(250) NOT NULL, \`last_updated\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`adminAdminId\` int NULL, UNIQUE INDEX \`IDX_081a4458014961bd9825a1d516\` (\`adminAdminId\`), UNIQUE INDEX \`REL_081a4458014961bd9825a1d516\` (\`adminAdminId\`), PRIMARY KEY (\`password_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`admin_credential\` ADD CONSTRAINT \`FK_081a4458014961bd9825a1d5162\` FOREIGN KEY (\`adminAdminId\`) REFERENCES \`admin\`(\`admin_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admin_credential\` DROP FOREIGN KEY \`FK_081a4458014961bd9825a1d5162\``);
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`DROP INDEX \`REL_081a4458014961bd9825a1d516\` ON \`admin_credential\``);
        await queryRunner.query(`DROP INDEX \`IDX_081a4458014961bd9825a1d516\` ON \`admin_credential\``);
        await queryRunner.query(`DROP TABLE \`admin_credential\``);
    }

}
