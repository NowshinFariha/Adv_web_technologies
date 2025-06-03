import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ViewCartDto } from './dto/view-cart.dto';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Cart) 
    private cartRepository: Repository<Cart>,

    @InjectRepository(CartItem) 
    private cartItemRepository: Repository<CartItem>,

    @InjectRepository(Order) 
    private orderRepository: Repository<Order>,

    @InjectRepository(OrderItem) 
    private orderItemRepository: Repository<OrderItem>,
  ) {
    console.log('OrderService initialized');

  }

  async addToCart(updateCartDto: UpdateCartDto) {
    const { menuItemId, quantity } = updateCartDto;

    // Find or create a cart (for logged-in or guest users)
    let cart = await this.cartRepository.findOne({ where: { sessionId: 'guest-session' } });
    if (!cart) {
      cart = this.cartRepository.create({ sessionId: 'guest-session' });
      await this.cartRepository.save(cart);
    }

    // Add or update the cart item
    let cartItem = await this.cartItemRepository.findOne({ where: { cart: cart, menuItemId } });
    if (!cartItem) {
      cartItem = this.cartItemRepository.create({ cart, menuItemId, quantity });
    } else {
      cartItem.quantity += quantity;
    }

    await this.cartItemRepository.save(cartItem);
    return cart;
  }

  async viewCart(viewCartDto: ViewCartDto) {
    const { userId, sessionId } = viewCartDto;

    // Find the cart
    const cart = await this.cartRepository.findOne({
      where: userId ? { userId } : { sessionId },
      relations: ['items'],
    });

    if (!cart || cart.items.length === 0) {
      throw new NotFoundException('Your cart is empty.');
    }

    return cart;
  }

  async updateCart(updateCartDto: UpdateCartDto) {
    const { menuItemId, quantity } = updateCartDto;

    // Find the cart item
    const cartItem = await this.cartItemRepository.findOne({ where: { menuItemId } });
    if (!cartItem) {
      throw new NotFoundException('Item not found in cart.');
    }

    if (quantity === 0) {
      // Remove the item if quantity is 0
      await this.cartItemRepository.remove(cartItem);
    } else {
      // Update the quantity
      cartItem.quantity = quantity;
      await this.cartItemRepository.save(cartItem);
    }

    return { message: 'Cart updated successfully.' };
  }

  async clearCart(viewCartDto: ViewCartDto) {
    const { userId, sessionId } = viewCartDto;

    // Find the cart
    const cart = await this.cartRepository.findOne({
      where: userId ? { userId } : { sessionId },
      relations: ['items'],
    });

    if (!cart) {
      throw new NotFoundException('Cart not found.');
    }

    // Remove all items from the cart
    await this.cartItemRepository.remove(cart.items);
    return { message: 'Cart cleared successfully.' };
  }

  async placeOrder(createOrderDto: CreateOrderDto) {
    const { items, deliveryAddress, paymentMethod } = createOrderDto;

    // Calculate total price
    const totalPrice = items.reduce((sum, item) => sum + item.quantity * 10, 0); // Example price logic

    // Create the order
    const order = this.orderRepository.create({
      totalPrice,
      status: 'Pending',
      deliveryAddress,
    });

    await this.orderRepository.save(order);

    // Add items to the order
    const orderItems = items.map((item) =>
      this.orderItemRepository.create({
        order,
        menuItemId: item.menuItemId,
        quantity: item.quantity,
        price: 10, // Example price logic
      }),
    );

    await this.orderItemRepository.save(orderItems);
    return order;
  }

  async getOrder(id: number) {
    const order = await this.orderRepository.findOne({ where: { id }, relations: ['items'] });
    if (!order) {
      throw new NotFoundException('Order not found.');
    }
    return order;
  }
}