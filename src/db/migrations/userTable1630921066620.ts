import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserTable1630921066620 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL PRIMARY KEY,
                "title" character varying NOT NULL,
                "description" character varying NOT NULL,
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"`);
    }

}