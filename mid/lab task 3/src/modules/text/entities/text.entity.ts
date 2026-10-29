import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name:"texts"})
export class Text{
    // Integer ID that the client sends in the body (not auto generated)
    @PrimaryColumn({ type: "int" })
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    created_at?: Date;

    @Column()
    updated_at?: Date;

}
