import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { TaskFieldDto, UpdateTaskFieldDto } from './dto/task-field.dto';
import { ClientProxy } from '@nestjs/microservices';
import { SandingCreateTaskFieldDto, SandingDeleteTaskFieldDto, SandingProjectIdTaskFields, SandingUpdateTaskFieldDto } from 'src/types/projectFields.types';

@Injectable()
export class TaskFieldsService {
  constructor(@Inject("PROJECTS_SERVICE") private client: ClientProxy) { }

  async create(userId: string, dto: TaskFieldDto) {
    try {
      const sanding: SandingCreateTaskFieldDto = { userId, projectId: dto.projectId, name: dto.name, field: dto.field }
      return this.client.send({ cmd: "create-task-field" }, sanding)
    } catch (error) {
      throw new HttpException(`Произошла ошибка создания поля проекта! ${error}`, HttpStatus.BAD_REQUEST)
    }
  }


  async findAll(userId: string, projectId: string) {
    try {
      const sanding: SandingProjectIdTaskFields = { userId, projectId }
      return this.client.send({ cmd: "get-all-task-field" }, sanding)
    } catch (error) {
      throw new HttpException(`Произошла ошибка получения полей проекта!`, HttpStatus.BAD_REQUEST)
    }
  }

  async update(userId: string, id: string, dto: UpdateTaskFieldDto) {
    try {
      const sanding: SandingUpdateTaskFieldDto = { userId, id, projectId: dto.projectId, name: dto.name, }
      return this.client.send({ cmd: "update-task-field" }, sanding)
    } catch (error) {
      throw new HttpException(`Произошла ошибка обновления поля проекта! ${error}`, HttpStatus.BAD_REQUEST)
    }
  }

  async remove(userId: string, projectId: string, id: string) {
    try {
      const sanding: SandingDeleteTaskFieldDto = { userId, projectId, id }
      return this.client.send({ cmd: "delete-task-field" }, sanding)
    } catch (error) {
      throw new HttpException(`Произошла ошибка обновления поля проекта! ${error}`, HttpStatus.BAD_REQUEST)
    }
  }
}
