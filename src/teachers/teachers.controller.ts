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
    return this.teachersService.getAll();
  }

  @Get('/:code')
  @ApiOperation({ summary: 'Método para obtener un solo docente por Id.' })
  get(@Param('code') code: string) {
    return this.teachersService.findByCode(code);
  }
}
