export declare class CreateOrderDto {
    items: {
        menuItemId: number;
        quantity: number;
    }[];
    deliveryAddress?: string;
    paymentMethod: string;
}
