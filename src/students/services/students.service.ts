import { Injectable, NotFoundException } from '@nestjs/common';
import { studentsMock } from '../mock/students.mock';

@Injectable()
export class StudentsService {
  async getAll() {
    return studentsMock;
  }

  async findByCode(code: string) {
    const student = studentsMock.find((element) => element.code == code);

    if (student) {
      return student;
    } else {
      throw new NotFoundException();
    }
  }
}
