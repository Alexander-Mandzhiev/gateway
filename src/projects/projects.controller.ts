import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectDto } from './dto/create-project.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { CreateProjectsResponse, ProjectsResponse } from 'src/types/projects.types';
import { DeleteMessage } from 'src/types/IBase';

@ApiTags('Проекты')
@Auth()
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) { }

  @ApiBody({ type: ProjectDto })
  //@ApiOkResponse({ type: CreateProjectsResponse })
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @Post()
  create(@CurrentUser('id') id: string, @Body() dto: ProjectDto) {
    return this.projectsService.create(id, dto);
  }

  @ApiOkResponse({ type: [ProjectsResponse] })
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@CurrentUser('id') id: string) {
    return this.projectsService.findAll(id);
  }

  @ApiOkResponse({ type: ProjectsResponse })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.projectsService.findOne(userId, id);
  }

  @ApiBody({ type: ProjectDto })
  @ApiOkResponse({ type: CreateProjectsResponse })
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@CurrentUser('id') userId: string, @Param('id') id: string, @Body() dto: ProjectDto) {
    return this.projectsService.update(userId, id, dto);
  }

  @ApiOkResponse({ type: DeleteMessage })
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.projectsService.remove(userId, id);
  }
}
