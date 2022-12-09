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

  @Get('/:id')
  @ApiOperation({ summary: 'Método para obtener un solo docente por Id.' })
  get(@Param('id') id: number) {
    return `Teachers Id: ${id}`;
  }
}
