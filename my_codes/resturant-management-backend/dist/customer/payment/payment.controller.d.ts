import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    create(createPaymentDto: CreatePaymentDto): Promise<import("./payment.entity").Payment>;
}
