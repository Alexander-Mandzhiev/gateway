import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaService } from 'src/prisma.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "TASKS_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'tasks-queue'
        }
      }
    ]),
  ],
  controllers: [TasksController],
  providers: [TasksService, PrismaService],
  exports: [TasksService]
})
export class TasksModule { }
