import {
  Body,
  Controller,
  Get,
  Post,
} from "@nestjs/common";
import { StudentService } from "./student.service";
import { CreateStudentDto } from "./dto/student.dto";
import { ValidationPipe } from "@/common/pipes/validation.pipe";

@Controller("students")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getStudents() {
    return await this.studentService.getStudents();
  }

  @Post()
  async createStudent(@Body(new ValidationPipe()) dto: CreateStudentDto) {
    return await this.studentService.createStudent(dto);
  }
}
