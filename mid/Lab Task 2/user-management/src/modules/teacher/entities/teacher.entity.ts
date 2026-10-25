import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "teacher" })
export class Teacher {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  department!: string;

  @Column()
  designation!: string;

  @Column()
  created_at?: Date;

  @Column()
  updated_at?: Date;
}
