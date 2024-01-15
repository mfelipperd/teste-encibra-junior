// auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './users/dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUserById(userId: string) {
    // Implemente a lógica para validar o usuário pelo ID
    // Retorna o usuário se for válido, ou nulo se não for encontrado
    return null;
  }

  async login(userId: string | LoginDto) {
    const payload = { sub: userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
