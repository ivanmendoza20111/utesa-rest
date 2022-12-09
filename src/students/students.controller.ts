import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { StudentsService } from './services/students.service';

@ApiTags('Students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  @ApiOperation({ summary: 'Método para obtener todos los estudiantes.' })
  @ApiOkResponse({
    isArray: true,
    status: 200,
    description: 'Devolverá un listado de estudiantes.',
  })
  getAll() {
    return this.studentsService.getAll();
  }

  @Get('/:code')
  @ApiOperation({ summary: 'Método para obtener los estudiantes por Id.' })
  @ApiOkResponse({
    isArray: true,
    status: 200,
    description: 'Devolverá un estudiante filtrado por código',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Estudiante no encontrado en la lista.',
  })
  get(@Param('code') code: string) {
    return this.studentsService.findByCode(code);
  }
}
