import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from './entities/user.entity';
import { JwtStrategy } from './strategies/jwt.strategy';
import { EmailService } from './utils/email.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'your-secret-key', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy, EmailService],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}