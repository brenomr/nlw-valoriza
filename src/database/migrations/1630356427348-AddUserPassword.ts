import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddUserPassword1630356427348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", new TableColumn({
            name: "password",
            type: "varchar",
            default: "'changePassword'"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "password");
    }
}
