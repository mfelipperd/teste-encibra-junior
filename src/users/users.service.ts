import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const { email, password } = loginDto;

    const user = await this.userRepo.findOne({
      where: { email },
      relations: ['tasks'],
    });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    function validationPassword(password) {
      if (user.password === password) return true;
      return false;
    }
    const isPasswordValid = validationPassword(password);

    if (!isPasswordValid || !user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    const accessToken = 'deuruim';
    const result = { accessToken, user };
    return result;
  }

  async create(createUserDto: CreateUserDto) {
    if (!createUserDto.name || createUserDto.name.trim().length < 3) {
      throw new BadRequestException(
        'O nome do usuário deve ter pelo menos 3 caracteres.',
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!createUserDto.email || !emailRegex.test(createUserDto.email)) {
      throw new BadRequestException('Informe um endereço de e-mail válido.');
    }

    if (!createUserDto.password || createUserDto.password.length < 6) {
      throw new BadRequestException(
        'A senha deve ter pelo menos 6 caracteres.',
      );
    }
    const newUser = await this.userRepo.save(createUserDto);
    const payload = { username: newUser.email, sub: newUser.id };
    const accessToken = 'deu ruim';
    return { newUser, accessToken };
  }

  findAll() {
    return this.userRepo.find({ relations: ['tasks'] });
  }

  findOne(id: string) {
    return this.userRepo.findOne({
      where: { id },
      relations: ['tasks'],
    });
  }

  findOneByName(name: string) {
    return this.userRepo.findOneBy({ name });
  }
  async findOneByEmail(email: string): Promise<User> {
    const user = await this.userRepo.findOne({
      where: { email: email },
      relations: ['tasks'],
    });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
