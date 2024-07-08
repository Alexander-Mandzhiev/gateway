import { Module } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { StatusesController } from './statuses.controller';
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
  controllers: [StatusesController],
  providers: [StatusesService],
})
export class StatusesModule { }
