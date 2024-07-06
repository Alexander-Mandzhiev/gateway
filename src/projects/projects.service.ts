import { Inject, Injectable } from '@nestjs/common';
import { ProjectDto } from './dto/create-project.dto';
import { ClientProxy } from '@nestjs/microservices';
import { SandProjectDto } from 'src/types/projects.types';

@Injectable()
export class ProjectsService {
  constructor(@Inject("PROJECTS_SERVICE") private client: ClientProxy) { }

  async create(userId: string, dto: ProjectDto) {
    const sanding: SandProjectDto = { userId, name: dto.name, description: dto.description }
    return this.client.send({ cmd: "create-project" }, sanding)
  }

  async findAll(id: string) {
    return this.client.send({ cmd: "get-all-projects" }, id)
  }

  async findOne(userId: string, id: string) {
    const sanding: SandProjectDto = { userId, id }
    return this.client.send({ cmd: "get-one-projects" }, sanding)
  }

  async update(userId: string, id: string, dto: ProjectDto) {
    const sanding: SandProjectDto = { userId, id, name: dto.name, description: dto.description }
    return this.client.send({ cmd: "update-projects" }, sanding)
  }

  async remove(userId: string, id: string) {
    const sanding: SandProjectDto = { userId, id }
    return this.client.send({ cmd: "delete-projects" }, sanding)
  }
}
