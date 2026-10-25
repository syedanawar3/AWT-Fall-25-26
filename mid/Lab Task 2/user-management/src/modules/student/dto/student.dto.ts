import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateStudentDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsNotEmpty()
  total_course!: number;

  @IsNotEmpty()
  cg!: number;

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}
