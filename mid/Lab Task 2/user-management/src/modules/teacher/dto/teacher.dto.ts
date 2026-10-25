import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateTeacherDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsNotEmpty()
  department: string = "";

  @IsNotEmpty()
  designation: string = "";

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}
