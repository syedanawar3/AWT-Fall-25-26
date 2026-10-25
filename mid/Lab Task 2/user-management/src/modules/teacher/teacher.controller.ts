import {
  Body,
  Controller,
  Get,
  Post,
} from "@nestjs/common";
import { TeacherService } from "./teacher.service";
import { CreateTeacherDto } from "./dto/teacher.dto";
import { ValidationPipe } from "@/common/pipes/validation.pipe";

@Controller("teachers")
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  async getTeachers() {
    return await this.teacherService.getTeachers();
  }

  @Post()
  async createTeacher(@Body(new ValidationPipe()) dto: CreateTeacherDto) {
    return await this.teacherService.createTeacher(dto);
  }
}
