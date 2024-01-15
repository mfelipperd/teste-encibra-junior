import { User } from 'src/users/entities/user.entity';

export class CreateTaskDto {
  title: string;

  description: string;

  term: Date | null;

  fineshed: boolean;

  user: User;
}
