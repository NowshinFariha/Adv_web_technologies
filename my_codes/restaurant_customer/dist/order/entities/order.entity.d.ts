import { OrderItem } from './order-item.entity';
export declare class Order {
    id: number;
    userId: number;
    totalPrice: number;
    status: string;
    deliveryAddress: string;
    createdAt: Date;
    items: OrderItem[];
}
