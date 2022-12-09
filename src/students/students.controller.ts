import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Students')
@Controller('students')
export class StudentsController {
  @Get()
  @ApiOperation({ summary: 'Método para obtener todos los estudiantes.' })
  getAll() {
    return [];
  }

  @Get('/:code')
  @ApiOperation({ summary: 'Método para obtener los estudiantes por Id.' })
  get(@Param('code') code: string) {
    return `Students Código: ${code}`;
  }
}
