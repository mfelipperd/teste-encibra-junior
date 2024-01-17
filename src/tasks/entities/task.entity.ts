import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  term: Date | null;

  @Column()
  finished: boolean;

  @Column()
  priority: number;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
