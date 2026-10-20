import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductTable1792489421414 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(  new Table({    
            name: "products",    
            columns: [     
                { name: "id", type: "uuid", isPrimary: true, generationStrategy: "uuid", default: "uuid_generate_v4()" },    
                { name: "name", type: "varchar" },    
                { name: "category", type: "varchar" },  
                { name: "price", type: "double precision" },    
                { name: "quantity", type: "int" },    
                ], 
                 }),);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
