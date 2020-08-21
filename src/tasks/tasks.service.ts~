import { Injectable, Query, HttpException, NotFoundException, Delete } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksModule } from './tasks.module';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { stat } from 'fs';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { User } from 'src/auth/user.entity';
@Injectable()
export class TasksService {
 constructor(@InjectRepository(TaskRepository) private taskRepository:TaskRepository){}


 async getAllTask(filterDto:GetTaskFilterDto,user:User): Promise<Task[]> {
      return this.taskRepository.getTask(filterDto,user)
  }


// getTaskWithFilters(filterDto:GetTaskFilterDto):Task[]{
//   const {status,search}=filterDto;
//   let tasks=this.getAllTask();
//   if(status)
//   {
//     tasks=tasks.filter(task=>task.status===status)
//   }
//   if(search){
//     tasks=tasks.filter(task=>task.title.includes(search) || task.description.includes(search))
//   }
// return tasks
// }
async  createTask(createTaskDto:CreateTaskDto,user:User) :Promise<Task>{
  const {title,description}=createTaskDto;
  const task = new Task();
   task.title=title;
   task.description=description;
   task.status=TaskStatus.OPEN;
   task.user=user;
   await task.save();
   delete task.user;
    return task;
  }
  async getTaskById(id:number,user:User):Promise<Task>{
      const found= await this.taskRepository.findOne({where:{id,userId:user.id}})
      if(!found){
        throw new NotFoundException(`Task with id ${id} not found`)
      }
      return found
  }

  async deleteTask(id:number,user:User):Promise<void>{
   const result = await this.taskRepository.delete({id,userId:user.id})
   if(result.affected==0){
     throw new NotFoundException(`Task with id ${id} not found`)
   }
   
  }

  async updateTaskStatus(id:number,status:TaskStatus,user:User){
    const task=await this.getTaskById(id,user);
    task.status=status
    await task.save();
    return task
    }
}
