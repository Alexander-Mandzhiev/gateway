import { Module } from '@nestjs/common';
import { TaskFieldValuesService } from './task-field-values.service';
import { TaskFieldValuesController } from './task-field-values.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "PROJECTS_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'tasks-queue'
        }
      }
    ]),
  ],
  controllers: [TaskFieldValuesController],
  providers: [TaskFieldValuesService],
})
export class TaskFieldValuesModule { }
