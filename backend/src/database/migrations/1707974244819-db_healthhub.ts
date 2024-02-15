import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1707974244819 implements MigrationInterface {
    name = 'DbHealthhub1707974244819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_profile\` DROP FOREIGN KEY \`FK_03a5654dbab064e0fccc419cc5b\``);
        await queryRunner.query(`DROP INDEX \`REL_03a5654dbab064e0fccc419cc5\` ON \`user_profile\``);
        await queryRunner.query(`CREATE TABLE \`user_credential\` (\`password_id\` int NOT NULL AUTO_INCREMENT, \`password_hash\` varchar(250) NOT NULL, \`password_salt\` varchar(250) NOT NULL, \`last_updated\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`password_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_profile\` DROP COLUMN \`credentialPasswordId\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD \`userCredentialPasswordId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD UNIQUE INDEX \`IDX_4a254850a62d7558c15be27c91\` (\`userCredentialPasswordId\`)`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_4a254850a62d7558c15be27c91\` ON \`user_entities\` (\`userCredentialPasswordId\`)`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD CONSTRAINT \`FK_4a254850a62d7558c15be27c91d\` FOREIGN KEY (\`userCredentialPasswordId\`) REFERENCES \`user_credential\`(\`password_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP FOREIGN KEY \`FK_4a254850a62d7558c15be27c91d\``);
        await queryRunner.query(`DROP INDEX \`REL_4a254850a62d7558c15be27c91\` ON \`user_entities\``);
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP INDEX \`IDX_4a254850a62d7558c15be27c91\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP COLUMN \`userCredentialPasswordId\``);
        await queryRunner.query(`ALTER TABLE \`user_profile\` ADD \`credentialPasswordId\` int NULL`);
        await queryRunner.query(`DROP TABLE \`user_credential\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_03a5654dbab064e0fccc419cc5\` ON \`user_profile\` (\`credentialPasswordId\`)`);
        await queryRunner.query(`ALTER TABLE \`user_profile\` ADD CONSTRAINT \`FK_03a5654dbab064e0fccc419cc5b\` FOREIGN KEY (\`credentialPasswordId\`) REFERENCES \`credential\`(\`password_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
