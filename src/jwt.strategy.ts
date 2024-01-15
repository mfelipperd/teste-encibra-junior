// jwt.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your-secret-key', // Deve ser a mesma chave usada para assinar o token
    });
  }

  async validate(payload: any): Promise<any> {
    // Aqui você pode adicionar lógica de validação, por exemplo, verificar se o usuário existe no banco de dados
    // Se o usuário não for encontrado, você pode lançar UnauthorizedException

    // Exemplo simples: retornando o ID do usuário
    return { userId: payload.sub, username: payload.username };
  }
}
