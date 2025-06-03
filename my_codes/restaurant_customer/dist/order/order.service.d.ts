import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ViewCartDto } from './dto/view-cart.dto';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderService {
    private cartRepository;
    private cartItemRepository;
    private orderRepository;
    private orderItemRepository;
    constructor(cartRepository: Repository<Cart>, cartItemRepository: Repository<CartItem>, orderRepository: Repository<Order>, orderItemRepository: Repository<OrderItem>);
    addToCart(updateCartDto: UpdateCartDto): Promise<Cart>;
    viewCart(viewCartDto: ViewCartDto): Promise<Cart>;
    updateCart(updateCartDto: UpdateCartDto): Promise<{
        message: string;
    }>;
    clearCart(viewCartDto: ViewCartDto): Promise<{
        message: string;
    }>;
    placeOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    getOrder(id: number): Promise<Order>;
}
