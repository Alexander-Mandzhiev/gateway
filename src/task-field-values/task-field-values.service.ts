import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { EnumValuesDto, TaskFieldValueDto } from './dto/task-field-value.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TaskFieldValuesService {

  constructor(@Inject("PROJECTS_SERVICE") private client: ClientProxy) { }

  async create(userId: string, dto: TaskFieldValueDto) {
    try {
      const sanding = { userId, projectId: dto.projectId, value: dto.value, taskFieldId: dto.taskFieldId, taskId: dto.taskId }
      return this.client.send({ cmd: "create-task-field-value" }, sanding)
    } catch (error) {
      throw new HttpException(`Произошла ошибка создания значения поля задачи! ${error}`, HttpStatus.BAD_REQUEST)
    }
  }


  async update(userId: string, dto: TaskFieldValueDto) {
    try {
      const sanding = { userId, projectId: dto.projectId, value: dto.value, taskFieldId: dto.taskFieldId, taskId: dto.taskId }
      return this.client.send({ cmd: "update-task-field-value" }, sanding)

    } catch (error) {
      throw new HttpException(`Произошла ошибка обновленния значения поля задачи! ${error}`, HttpStatus.FORBIDDEN)
    }
  }

  async createEnumValueList(userId: string, dto: EnumValuesDto) {
    try {
      const sanding = { userId, projectId: dto.projectId, values: dto.values, taskFieldId: dto.taskFieldId }
      return this.client.send({ cmd: "create-enum-task-field-values-list" }, sanding)
    } catch (error) {
      throw new HttpException(`Произошла ошибка создания значения для списка поля задачи! ${error}`, HttpStatus.FORBIDDEN)
    }
  }

  async remove(userId: string, dto: TaskFieldValueDto) {
    try {
      const sanding = { userId, projectId: dto.projectId, value: dto.value, taskFieldId: dto.taskFieldId }
      return this.client.send({ cmd: "remove-task-field-value" }, sanding)
    } catch (error) {
      throw new HttpException(`Произошла ошибка удаления значения поля задачи! ${error}`, HttpStatus.FORBIDDEN)
    }
  }
}