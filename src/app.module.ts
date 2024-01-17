import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/entities/user.entity';
import { Task } from './tasks/entities/task.entity';
import { JwtModule } from '@nestjs/jwt';
import * as crypto from 'crypto';

export const secretKey = crypto.randomBytes(32).toString('hex');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'todolist',
      entities: [Task, User],
      synchronize: true,
    }),
    UsersModule,
    JwtModule.register({
      secret: secretKey,
      signOptions: { expiresIn: '1d' },
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
