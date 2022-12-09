import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
  async getAll() {
    return [];
  }

  async findByCode(code: string) {
    return code;
  }
}
