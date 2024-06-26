import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableBook1716400210183 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: "books",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "title",
                    type: "varchar"
                },
                {
                    name: "type",
                    type: "varchar"
                },
                {
                    name: "price",
                    type: "integer"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books");
    }

}
