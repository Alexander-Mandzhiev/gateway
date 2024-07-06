import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { TaskDto, UpdateOrderDto } from './dto/task.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TasksService {
  constructor(@Inject("TASKS_SERVICE") private cabbitClient: ClientProxy) { }

  async create(dto: TaskDto) {
    this.cabbitClient.send("task-create", dto)
  }

  async findAll(statusId: string) {
    try {
      return await 3
    } catch (error) {
      throw new HttpException(`Произошла ошибка получения задач! ${error}`, HttpStatus.BAD_REQUEST)
    }
  }

  async findOne(statusId: string, id: string) {
    try {
      return await 4
    } catch (error) {
      throw new HttpException(`Произошла ошибка получения задачи! ${error}`, HttpStatus.BAD_REQUEST)
    }
  }

  async update(id: string, dto: TaskDto) {
    try {
      return await 4
    } catch (error) {
      throw new HttpException(`Произошла ошибка обновления задачи! ${error}`, HttpStatus.BAD_REQUEST)
    }
  }

  async remove(id: string) {
    try {
      return await 4
    } catch (error) {
      throw new HttpException(`Произошла ошибка удаления задачи! ${error}`, HttpStatus.BAD_REQUEST)
    }
  }

  async updateOrderTasks(dto: UpdateOrderDto) {
    try {
      return await 4
    } catch (error) {
      throw new HttpException(`Произошла ошибка обновления порядка задачи!`, HttpStatus.NOT_FOUND);
    }
  }
}
