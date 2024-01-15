// auth.module.ts

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your-secret-key', // Defina uma chave secreta forte
      signOptions: { expiresIn: '1h' }, // Defina o tempo de expiração do token
    }),
  ],
})
export class AuthModule {}
