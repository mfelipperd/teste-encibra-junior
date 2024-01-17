import { User } from 'src/users/entities/user.entity';

export class CreateTaskDto {
  title: string;

  description: string;

  term: Date | null;

  finished: boolean;

  priority: number;

  user: User;
}
