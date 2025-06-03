import { Injectable } from '@nestjs/common';
import { Order } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = new Order();
    order.customerName = createOrderDto.customerName;
    order.orderDetails = createOrderDto.orderDetails;
    order.totalAmount = createOrderDto.totalAmount;
    order.status = createOrderDto.status || 'Pending';
    return this.orderRepository.save(order);
  }
}
