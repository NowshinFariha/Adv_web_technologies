import { CartItem } from './cart-item.entity';
export declare class Cart {
    id: number;
    userId: number;
    sessionId: string;
    items: CartItem[];
}
