import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Teacher } from "./entities/teacher.entity";
import { Repository } from "typeorm";
import { CreateTeacherDto } from "./dto/teacher.dto";


@Injectable()
export class TeacherService {
constructor(
  @InjectRepository(Teacher) private readonly teacherRepository: Repository<Teacher>,
) {}

async getTeachers() {
try {
  const teachers = await this.teacherRepository.find();
  return teachers;}
  catch (error) {
    throw error;
}
}

async createTeacher(dto: CreateTeacherDto) {
try{
  const responce = await this.teacherRepository.create(dto);
  return await this.teacherRepository.save(responce);
}
catch (error) {
  throw error;
}}
}
