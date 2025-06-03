import { Order } from './order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderService {
    private orderRepository;
    constructor(orderRepository: Repository<Order>);
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
}
