export class CreateOrderDto {
    items: { menuItemId: number; quantity: number }[];
    deliveryAddress?: string; // Optional for logged-in users
    paymentMethod: string; // e.g., Cash, Card, Online
  }