import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ViewCartDto } from './dto/view-cart.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    addToCart(updateCartDto: UpdateCartDto): Promise<import("./entities/cart.entity").Cart>;
    viewCart(viewCartDto: ViewCartDto): Promise<import("./entities/cart.entity").Cart>;
    updateCart(updateCartDto: UpdateCartDto): Promise<{
        message: string;
    }>;
    clearCart(viewCartDto: ViewCartDto): Promise<{
        message: string;
    }>;
    placeOrder(createOrderDto: CreateOrderDto): Promise<import("./entities/order.entity").Order>;
    getOrder(id: number): Promise<import("./entities/order.entity").Order>;
}
