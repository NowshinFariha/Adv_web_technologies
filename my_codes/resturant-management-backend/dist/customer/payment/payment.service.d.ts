import { Payment } from './payment.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/create-payment.dto';
export declare class PaymentService {
    private paymentRepository;
    constructor(paymentRepository: Repository<Payment>);
    createPayment(createPaymentDto: CreatePaymentDto): Promise<Payment>;
}
