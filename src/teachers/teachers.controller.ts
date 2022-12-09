import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TeachersService } from './services/teachers.service';

@ApiTags('Teachers')
@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  @ApiOperation({ summary: 'Método para obtener todos los docentes.' })
  getAll() {
    return [];
  }

  @Get('/:code')
  @ApiOperation({ summary: 'Método para obtener un solo docente por Id.' })
  get(@Param('code') code: string) {
    return `Teachers Code: ${code}`;
  }
}
