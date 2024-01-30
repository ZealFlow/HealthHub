import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableIndex,
    TableColumn,
    TableForeignKey,
} from "typeorm"

export class QuestionRefactoringTIMESTAMP implements MigrationInterface {
    name?: string | undefined;
    transaction?: boolean | undefined;

    up(queryRunner: QueryRunner): Promise<any> {
        throw new Error("Method not implemented.");
    }

    down(queryRunner: QueryRunner): Promise<any> {
        throw new Error("Method not implemented.");
    }
}