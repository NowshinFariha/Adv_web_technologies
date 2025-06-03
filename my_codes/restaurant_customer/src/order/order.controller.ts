import { Controller, Get, Post, Patch, Delete, Body, Query, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ViewCartDto } from './dto/view-cart.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('cart')
  async addToCart(@Body() updateCartDto: UpdateCartDto) {
    return this.orderService.addToCart(updateCartDto);
  }

  @Get('cart')
  async viewCart(@Query() viewCartDto: ViewCartDto) {
    return this.orderService.viewCart(viewCartDto);
  }

  @Patch('cart')
  async updateCart(@Body() updateCartDto: UpdateCartDto) {
    return this.orderService.updateCart(updateCartDto);
  }

  @Delete('cart')
  async clearCart(@Query() viewCartDto: ViewCartDto) {
    return this.orderService.clearCart(viewCartDto);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async placeOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.placeOrder(createOrderDto);
  }

  @Get(':id')
  async getOrder(@Query('id') id: number) {
    return this.orderService.getOrder(id);
  }
}