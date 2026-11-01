import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"createusers"})
export class CreateUser{
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    fullname!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column({ type: "int" })
    age!: number;

    @Column()
    phone!: string;

    @Column()
    accountType!: string;

    @Column({ nullable: true })
    address?: string;

    @Column()
    created_at?: Date;

    @Column()
    updated_at?: Date;

}