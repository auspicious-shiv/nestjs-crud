import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import {Task} from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validaton.pipe';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private readonly taskservice: TasksService) {}

  @Get()
  getAllTask(
    @Query() filterDto: GetTaskFilterDto,
    @GetUser() user:User,
    ):Promise<Task[]> {
      return this.taskservice.getAllTask(filterDto,user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createTaskdto: CreateTaskDto,
    @GetUser() user:User
    ): Promise<Task> {
      
    return this.taskservice.createTask(createTaskdto,user);
  }
  @Get('/:id')
  getTaskById(
    @Param('id',ParseIntPipe)id: number,
    @GetUser() user:User
    ): Promise<Task> {
    return this.taskservice.getTaskById(id,user);
  }
  @Delete('/:id')
  deleteTaskById(@Param('id',ParseIntPipe) id: number,
  @GetUser() user:User
  ):Promise <void> {
    return this.taskservice.deleteTask(id,user);
  }
  @Patch('/:id') 
  updateTaskStatus(
    @Param('id') id: number,
    @Body('status',TaskStatusValidationPipe) status: TaskStatus,
    @GetUser() user:User
  ): Promise<Task> {
    return this.taskservice.updateTaskStatus(id, status,user);
  }
}
