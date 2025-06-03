import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from '../customer/reservation/reservation.entity';
import { Order } from '../customer/order/order.entity';
import { Menu } from '../customer/menu/menu.entity';
import { Payment } from '../customer/payment/payment.entity';
import { Feedback } from '../customer/feedback/feedback.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<TypeOrmModuleOptions> => ({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Reservation, Order, Menu, Payment, Feedback],
      synchronize: true, // Set to false in production
    }),
  },
];
