import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "./entities/student.entity";
import { Repository } from "typeorm";
import { CreateStudentDto } from "./dto/student.dto";


@Injectable()
export class StudentService {
constructor(
  @InjectRepository(Student) private readonly studentRepository: Repository<Student>,
) {}

async getStudents() {
try {
  const students = await this.studentRepository.find();
  return students;}
  catch (error) {
    throw error;
}
}

async createStudent(dto: CreateStudentDto) {
try{
  const responce = await this.studentRepository.create(dto);
  return await this.studentRepository.save(responce);
}
catch (error) {
  throw error;
}}
}
