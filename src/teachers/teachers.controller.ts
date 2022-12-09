import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Teachers')
@Controller('teachers')
export class TeachersController {
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
