import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return this.taskRepo.save(createTaskDto);
  }

  findAll() {
    return this.taskRepo.find({ relations: ['user'] });
  }

  findOne(id: string) {
    return this.taskRepo.findOneBy({ id });
  }

  // findByUser(id: string) {
  //   return this.taskRepo.findOne()
  // }

  // update(id: string, updateTaskDto: UpdateTaskDto) {
  //   return this.taskRepo.update(id, updateTaskDto);
  // }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const existingTask = await this.taskRepo.findOne({ where: { id } });
    console.log(id);

    if (!existingTask) {
      throw new NotFoundException('Task not found');
    }

    // Faça as atualizações necessárias no objeto da tarefa
    if (updateTaskDto.title) {
      existingTask.title = updateTaskDto.title;
    }

    if (updateTaskDto.description) {
      existingTask.description = updateTaskDto.description;
    }

    if (updateTaskDto.finished !== undefined) {
      existingTask.finished = updateTaskDto.finished;
    }
    if (updateTaskDto.priority !== undefined) {
      existingTask.priority = updateTaskDto.priority;
    }

    // Salve as alterações no banco de dados
    await this.taskRepo.save(existingTask);

    return existingTask;
  }

  remove(id: string) {
    return this.taskRepo.delete(id);
  }
}
