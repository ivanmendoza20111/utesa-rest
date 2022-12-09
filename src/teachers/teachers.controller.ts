import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { TeachersService } from './services/teachers.service';

@ApiTags('Teachers')
@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  @ApiOperation({ summary: 'Método para obtener todos los docentes.' })
  @ApiOkResponse({
    isArray: true,
    status: 200,
    description: 'Devolverá un listado de docentes.',
  })
  getAll() {
    return this.teachersService.getAll();
  }

  @Get('/:code')
  @ApiOperation({ summary: 'Método para obtener un solo docente por Id.' })
  @ApiOkResponse({
    isArray: true,
    status: 200,
    description: 'Devolverá un Docente filtrado por código',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Docente no encontrado en la lista.',
  })
  get(@Param('code') code: string) {
    return this.teachersService.findByCode(code);
  }
}
