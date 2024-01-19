import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/entities/user.entity';
import { Task } from './tasks/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_DATABASE || 'todolist',
      entities: [Task, User],
      synchronize: process.env.DB_SYNCHRONIZE === 'true' || false,
    }),
    UsersModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
