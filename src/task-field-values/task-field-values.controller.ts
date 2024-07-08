import { Controller, Post, Body, Patch, HttpCode, UsePipes, HttpStatus, ValidationPipe, Delete, Get } from '@nestjs/common';
import { TaskFieldValuesService } from './task-field-values.service';
import { EnumValuesDto, TaskFieldValueDto } from './dto/task-field-value.dto';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ResponseEnum } from 'src/types/projectFields.types';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { DeleteMessage } from 'src/types/IBase';

@ApiTags('Значения полей задач')
@Auth()
@Controller('task-field-values')
export class TaskFieldValuesController {
  constructor(private readonly taskFieldValuesService: TaskFieldValuesService) { }

  @ApiBody({ type: TaskFieldValueDto })
  @ApiOkResponse({ type: TaskFieldValueDto })
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @Post()
  create(@CurrentUser('id') userId: string, @Body() dto: TaskFieldValueDto) {
    return this.taskFieldValuesService.create(userId, dto);
  }

  @ApiBody({ type: EnumValuesDto })
  @ApiOkResponse({ type: ResponseEnum })
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @Post('enum')
  createEnumValueList(@CurrentUser('id') userId: string, @Body() dto: EnumValuesDto) {
    return this.taskFieldValuesService.createEnumValueList(userId, dto);
  }

  @ApiBody({ type: TaskFieldValueDto })
  @ApiOkResponse({ type: TaskFieldValueDto })
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @Patch()
  update(@CurrentUser('id') userId: string, @Body() dto: TaskFieldValueDto) {
    return this.taskFieldValuesService.update(userId, dto);
  }

  @ApiOkResponse({ type: DeleteMessage })
  @HttpCode(HttpStatus.OK)
  @Delete(':project_id/:status_id/:id')
  remove(@CurrentUser('id') userId: string, @Body() dto: TaskFieldValueDto) {
    return this.taskFieldValuesService.remove(userId, dto);
  }
}
