import { Repository, EntityRepository } from 'typeorm';
import { Task } from './task.entity';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { User } from 'src/auth/user.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async getTask(getTaskFilter: GetTaskFilterDto, user: User): Promise<Task[]> {
    const { status, search } = getTaskFilter;
    const query = this.createQueryBuilder('task');
    query.where(`task.userId=:userId`,{userId:user.id});
    if (status) {
      query.andWhere('task.status=:status', { status });
    }
    if (search) {
      query.andWhere(
        '(task.title LIKE :search OR task.description LIKE :search)',
        { search: `%${search}%` },
      );
    }
    const task = await query.getMany();
    return task;
  }
}
