import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {Task} from '../tasks/task.entity'
import { User } from 'src/auth/user.entity';
export const typeOrmConfig:TypeOrmModuleOptions={
type:'postgres',
url:'postgres://xemnygpk:zy4VDbmHazse5EyHRCyOVO9JiXKCAbr1@drona.db.elephantsql.com:5432/xemnygpk',
entities:[Task,User],
synchronize:true
} 