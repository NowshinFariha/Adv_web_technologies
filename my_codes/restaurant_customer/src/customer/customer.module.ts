import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerProfileController } from './customer.controller';
import { CustomerProfileService } from './customer.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { User } from 'src/auth/entities/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [CustomerProfileController],
  providers: [CustomerProfileService, JwtAuthGuard],
})
export class CustomerProfileModule {}