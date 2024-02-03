import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1706972226791 implements MigrationInterface {
    name = 'DbHealthhub1706972226791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_8d59f8bcab459e79fd5cbcc77d\` ON \`admin\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` CHANGE \`entity_profile_id\` \`entity_profile_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD PRIMARY KEY (\`entity_user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP COLUMN \`entity_profile_id\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP COLUMN \`entity_user_id\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD \`entity_id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD \`userProfileUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD UNIQUE INDEX \`IDX_51353729c3e9cb1e78ccfcb7cd\` (\`userProfileUserId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_51353729c3e9cb1e78ccfcb7cd\` ON \`user_entities\` (\`userProfileUserId\`)`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD CONSTRAINT \`FK_51353729c3e9cb1e78ccfcb7cdb\` FOREIGN KEY (\`userProfileUserId\`) REFERENCES \`user_profile\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP FOREIGN KEY \`FK_51353729c3e9cb1e78ccfcb7cdb\``);
        await queryRunner.query(`DROP INDEX \`REL_51353729c3e9cb1e78ccfcb7cd\` ON \`user_entities\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP INDEX \`IDX_51353729c3e9cb1e78ccfcb7cd\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP COLUMN \`userProfileUserId\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP COLUMN \`entity_id\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD \`entity_user_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD PRIMARY KEY (\`entity_user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD \`entity_profile_id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD PRIMARY KEY (\`entity_profile_id\`, \`entity_user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` CHANGE \`entity_profile_id\` \`entity_profile_id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_8d59f8bcab459e79fd5cbcc77d\` ON \`admin\` (\`userProfileUserId\`)`);
    }

}
