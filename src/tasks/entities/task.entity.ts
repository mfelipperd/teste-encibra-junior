import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
@Entity()
export class Task {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  term: Date | null;

  @Column()
  finshed: boolean;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
