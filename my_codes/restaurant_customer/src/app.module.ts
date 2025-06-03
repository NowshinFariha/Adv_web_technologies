import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CustomerProfileModule } from './customer/customer.module';
import { MenuModule } from './menu/menu.module';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'nf9999',
      database: 'restaurant_customer',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    CustomerProfileModule,
    MenuModule,
    OrderModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}