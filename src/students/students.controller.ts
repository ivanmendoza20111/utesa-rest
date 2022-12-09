import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { StudentsService } from './services/students.service';

@ApiTags('Students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  @ApiOperation({ summary: 'Método para obtener todos los estudiantes.' })
  getAll() {
    return this.studentsService.getAll();
  }

  @Get('/:code')
  @ApiOperation({ summary: 'Método para obtener los estudiantes por Id.' })
  get(@Param('code') code: string) {
    return this.studentsService.findByCode(code);
  }
}
