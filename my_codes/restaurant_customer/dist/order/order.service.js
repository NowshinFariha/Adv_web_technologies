"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cart_entity_1 = require("./entities/cart.entity");
const cart_item_entity_1 = require("./entities/cart-item.entity");
const order_entity_1 = require("./entities/order.entity");
const order_item_entity_1 = require("./entities/order-item.entity");
let OrderService = class OrderService {
    cartRepository;
    cartItemRepository;
    orderRepository;
    orderItemRepository;
    constructor(cartRepository, cartItemRepository, orderRepository, orderItemRepository) {
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        console.log('OrderService initialized');
    }
    async addToCart(updateCartDto) {
        const { menuItemId, quantity } = updateCartDto;
        let cart = await this.cartRepository.findOne({ where: { sessionId: 'guest-session' } });
        if (!cart) {
            cart = this.cartRepository.create({ sessionId: 'guest-session' });
            await this.cartRepository.save(cart);
        }
        let cartItem = await this.cartItemRepository.findOne({ where: { cart: cart, menuItemId } });
        if (!cartItem) {
            cartItem = this.cartItemRepository.create({ cart, menuItemId, quantity });
        }
        else {
            cartItem.quantity += quantity;
        }
        await this.cartItemRepository.save(cartItem);
        return cart;
    }
    async viewCart(viewCartDto) {
        const { userId, sessionId } = viewCartDto;
        const cart = await this.cartRepository.findOne({
            where: userId ? { userId } : { sessionId },
            relations: ['items'],
        });
        if (!cart || cart.items.length === 0) {
            throw new common_1.NotFoundException('Your cart is empty.');
        }
        return cart;
    }
    async updateCart(updateCartDto) {
        const { menuItemId, quantity } = updateCartDto;
        const cartItem = await this.cartItemRepository.findOne({ where: { menuItemId } });
        if (!cartItem) {
            throw new common_1.NotFoundException('Item not found in cart.');
        }
        if (quantity === 0) {
            await this.cartItemRepository.remove(cartItem);
        }
        else {
            cartItem.quantity = quantity;
            await this.cartItemRepository.save(cartItem);
        }
        return { message: 'Cart updated successfully.' };
    }
    async clearCart(viewCartDto) {
        const { userId, sessionId } = viewCartDto;
        const cart = await this.cartRepository.findOne({
            where: userId ? { userId } : { sessionId },
            relations: ['items'],
        });
        if (!cart) {
            throw new common_1.NotFoundException('Cart not found.');
        }
        await this.cartItemRepository.remove(cart.items);
        return { message: 'Cart cleared successfully.' };
    }
    async placeOrder(createOrderDto) {
        const { items, deliveryAddress, paymentMethod } = createOrderDto;
        const totalPrice = items.reduce((sum, item) => sum + item.quantity * 10, 0);
        const order = this.orderRepository.create({
            totalPrice,
            status: 'Pending',
            deliveryAddress,
        });
        await this.orderRepository.save(order);
        const orderItems = items.map((item) => this.orderItemRepository.create({
            order,
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            price: 10,
        }));
        await this.orderItemRepository.save(orderItems);
        return order;
    }
    async getOrder(id) {
        const order = await this.orderRepository.findOne({ where: { id }, relations: ['items'] });
        if (!order) {
            throw new common_1.NotFoundException('Order not found.');
        }
        return order;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_entity_1.Cart)),
    __param(1, (0, typeorm_1.InjectRepository)(cart_item_entity_1.CartItem)),
    __param(2, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(3, (0, typeorm_1.InjectRepository)(order_item_entity_1.OrderItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderService);
//# sourceMappingURL=order.service.js.map