import { Injectable } from '@nestjs/common';
import { Payment } from './payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}

  async createPayment(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const payment = new Payment();
    payment.amount = createPaymentDto.amount;
    payment.paymentMethod = createPaymentDto.paymentMethod;
    payment.paymentDate = createPaymentDto.paymentDate;
    return this.paymentRepository.save(payment);
  }
}
