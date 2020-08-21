import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { User } from 'src/auth/user.entity';
export declare class TaskRepository extends Repository<Task> {
    getTask(getTaskFilter: GetTaskFilterDto, user: User): Promise<Task[]>;
}
