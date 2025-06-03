import { Cart } from './cart.entity';
export declare class CartItem {
    id: number;
    cart: Cart;
    menuItemId: number;
    quantity: number;
}
