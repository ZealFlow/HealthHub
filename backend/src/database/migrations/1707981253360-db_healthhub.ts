import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1707981253360 implements MigrationInterface {
    name = 'DbHealthhub1707981253360'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_profile\` DROP FOREIGN KEY \`FK_1476c2eca46cbd8a852f62846e0\``);
        await queryRunner.query(`DROP INDEX \`REL_1476c2eca46cbd8a852f62846e\` ON \`user_profile\``);
        await queryRunner.query(`ALTER TABLE \`user_profile\` DROP COLUMN \`userEntitiesEntityId\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD \`userProfileUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD UNIQUE INDEX \`IDX_51353729c3e9cb1e78ccfcb7cd\` (\`userProfileUserId\`)`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_51353729c3e9cb1e78ccfcb7cd\` ON \`user_entities\` (\`userProfileUserId\`)`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD CONSTRAINT \`FK_51353729c3e9cb1e78ccfcb7cdb\` FOREIGN KEY (\`userProfileUserId\`) REFERENCES \`user_profile\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP FOREIGN KEY \`FK_51353729c3e9cb1e78ccfcb7cdb\``);
        await queryRunner.query(`DROP INDEX \`REL_51353729c3e9cb1e78ccfcb7cd\` ON \`user_entities\``);
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP INDEX \`IDX_51353729c3e9cb1e78ccfcb7cd\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP COLUMN \`userProfileUserId\``);
        await queryRunner.query(`ALTER TABLE \`user_profile\` ADD \`userEntitiesEntityId\` int NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_1476c2eca46cbd8a852f62846e\` ON \`user_profile\` (\`userEntitiesEntityId\`)`);
        await queryRunner.query(`ALTER TABLE \`user_profile\` ADD CONSTRAINT \`FK_1476c2eca46cbd8a852f62846e0\` FOREIGN KEY (\`userEntitiesEntityId\`) REFERENCES \`user_entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
