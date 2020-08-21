import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { User } from 'src/auth/user.entity';
export declare class TasksController {
    private readonly taskservice;
    constructor(taskservice: TasksService);
    getAllTask(filterDto: GetTaskFilterDto, user: User): Promise<Task[]>;
    createTask(createTaskdto: CreateTaskDto, user: User): Promise<Task>;
    getTaskById(id: number, user: User): Promise<Task>;
    deleteTaskById(id: number, user: User): Promise<void>;
    updateTaskStatus(id: number, status: TaskStatus, user: User): Promise<Task>;
}
