import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmployeeTable1792489434260 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(  new Table({    
            name: "employees",    columns: [   
                { name: "id", type: "uuid", isPrimary: true, generationStrategy: "uuid", default: "uuid_generate_v4()" },     
                { name: "name", type: "varchar" },      
                { name: "email", type: "varchar" },      
                { name: "phone", type: "varchar" },      
                { name: "password", type: "varchar" },      
                { name: "age", type: "int" },      
                { name: "years_of_working", type: "int" },    
            ],  
        }),);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("employees");
    }

}
