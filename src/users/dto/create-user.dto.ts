import { Task } from 'src/tasks/entities/task.entity';

export class CreateUserDto {
  name: string;

  email: string;

  password: string;

  tasks: Task[];
}
