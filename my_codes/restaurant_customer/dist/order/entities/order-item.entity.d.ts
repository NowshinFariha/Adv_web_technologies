import { Order } from './order.entity';
export declare class OrderItem {
    id: number;
    order: Order;
    menuItemId: number;
    quantity: number;
    price: number;
}
