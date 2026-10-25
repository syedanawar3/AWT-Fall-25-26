import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "student" })
export class Student {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column({ type: "int" })
  total_course!: number;

  @Column({ type: "float" })
  cg!: number;

  @Column()
  created_at?: Date;

  @Column()
  updated_at?: Date;
}
