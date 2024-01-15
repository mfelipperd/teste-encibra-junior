import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Task } from 'src/tasks/entities/task.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
