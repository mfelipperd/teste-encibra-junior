import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    //return this.userRepo.save(createUserDto);
    // Validação do nome
    if (!createUserDto.name || createUserDto.name.trim().length < 3) {
      throw new BadRequestException(
        'O nome do usuário deve ter pelo menos 3 caracteres.',
      );
    }

    // Validação do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!createUserDto.email || !emailRegex.test(createUserDto.email)) {
      throw new BadRequestException('Informe um endereço de e-mail válido.');
    }

    // Validação da senha
    if (!createUserDto.password || createUserDto.password.length < 6) {
      throw new BadRequestException(
        'A senha deve ter pelo menos 6 caracteres.',
      );
    }

    return this.userRepo.save(createUserDto);
  }

  findAll() {
    return this.userRepo.find({ relations: ['tasks'] });
  }

  findOne(id: string) {
    return this.userRepo.findOneBy({ id });
  }

  findOneByName(name: string) {
    return this.userRepo.findOneBy({ name });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
