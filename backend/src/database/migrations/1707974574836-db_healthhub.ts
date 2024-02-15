import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1707974574836 implements MigrationInterface {
    name = 'DbHealthhub1707974574836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP FOREIGN KEY \`FK_4a254850a62d7558c15be27c91d\``);
        await queryRunner.query(`DROP INDEX \`IDX_4a254850a62d7558c15be27c91\` ON \`user_entities\``);
        await queryRunner.query(`DROP INDEX \`REL_4a254850a62d7558c15be27c91\` ON \`user_entities\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP COLUMN \`userCredentialPasswordId\``);
        await queryRunner.query(`ALTER TABLE \`user_credential\` ADD \`userEntitiesEntityId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_credential\` ADD UNIQUE INDEX \`IDX_8d702c04302bc47271cc5a00e3\` (\`userEntitiesEntityId\`)`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_8d702c04302bc47271cc5a00e3\` ON \`user_credential\` (\`userEntitiesEntityId\`)`);
        await queryRunner.query(`ALTER TABLE \`user_credential\` ADD CONSTRAINT \`FK_8d702c04302bc47271cc5a00e34\` FOREIGN KEY (\`userEntitiesEntityId\`) REFERENCES \`user_entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_credential\` DROP FOREIGN KEY \`FK_8d702c04302bc47271cc5a00e34\``);
        await queryRunner.query(`DROP INDEX \`REL_8d702c04302bc47271cc5a00e3\` ON \`user_credential\``);
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`user_credential\` DROP INDEX \`IDX_8d702c04302bc47271cc5a00e3\``);
        await queryRunner.query(`ALTER TABLE \`user_credential\` DROP COLUMN \`userEntitiesEntityId\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD \`userCredentialPasswordId\` int NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_4a254850a62d7558c15be27c91\` ON \`user_entities\` (\`userCredentialPasswordId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_4a254850a62d7558c15be27c91\` ON \`user_entities\` (\`userCredentialPasswordId\`)`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD CONSTRAINT \`FK_4a254850a62d7558c15be27c91d\` FOREIGN KEY (\`userCredentialPasswordId\`) REFERENCES \`user_credential\`(\`password_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
