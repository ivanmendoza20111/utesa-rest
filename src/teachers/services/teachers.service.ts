import { Injectable, NotFoundException } from '@nestjs/common';
import { teachersMock } from '../mock/teachers.mock';

@Injectable()
export class TeachersService {
  async getAll() {
    return teachersMock;
  }

  async findByCode(code: string) {
    const teacher = teachersMock.find((element) => element.code == code);

    if (teacher) {
      return teacher;
    } else {
      throw new NotFoundException();
    }
  }
}
