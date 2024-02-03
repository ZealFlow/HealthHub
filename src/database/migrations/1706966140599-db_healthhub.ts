import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1706966140599 implements MigrationInterface {
    name = 'DbHealthhub1706966140599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`admin\` (\`admin_id\` int NOT NULL, PRIMARY KEY (\`admin_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entity_user\` (\`entity_user_id\` int NOT NULL AUTO_INCREMENT, \`firstname\` varchar(50) NOT NULL, \`lastname\` varchar(50) NOT NULL, \`email\` varchar(100) NOT NULL, \`username\` varchar(50) NOT NULL, \`create_at\` timestamp NOT NULL, \`update_at\` timestamp NOT NULL, \`is_active\` bit NOT NULL, PRIMARY KEY (\`entity_user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entity_profile\` (\`entity_profile_id\` int NOT NULL AUTO_INCREMENT, \`entity_user_id\` int NOT NULL, \`enity_user\` json NOT NULL, \`create_at\` timestamp NOT NULL, \`update_at\` timestamp NOT NULL, \`website_id\` int NOT NULL, \`is_active\` bit NOT NULL, PRIMARY KEY (\`entity_profile_id\`, \`entity_user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entity_user_passwords\` (\`password_id\` int NOT NULL AUTO_INCREMENT, \`entity_user_id\` int NOT NULL, \`password_hash\` varchar(32) NOT NULL, \`last_updated\` timestamp NOT NULL, PRIMARY KEY (\`password_id\`, \`entity_user_id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`entity_user_passwords\``);
        await queryRunner.query(`DROP TABLE \`entity_profile\``);
        await queryRunner.query(`DROP TABLE \`entity_user\``);
        await queryRunner.query(`DROP TABLE \`admin\``);
    }

}
