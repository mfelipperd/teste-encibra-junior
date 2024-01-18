import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from 'src/tasks/entities/task.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Task, (task) => task.user, { nullable: true })
  tasks: Task[] | null;
}
