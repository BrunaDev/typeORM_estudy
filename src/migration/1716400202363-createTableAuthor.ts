import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableAuthor1716400202363 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: "authors",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "first_name",
                    type: "varchar"
                },
                {
                    name: "last_name",
                    type: "varchar"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("authors");
    }

}