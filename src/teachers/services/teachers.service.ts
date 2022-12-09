import { Injectable } from '@nestjs/common';

@Injectable()
export class TeachersService {
  async getAll() {
    return [];
  }

  async findByCode(code: string) {
    return code;
  }
}
