import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerNotFoundException } from './exceptions/custom.exceptions';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class CustomerProfileService {
  constructor(
    @InjectRepository(User)
    private customerRepository: Repository<User>,
  ) {}

 
  async getCustomerProfile(userId: number) {
    const user = await this.customerRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Customer not found');
    }
    return user;
  }

 
  async updateCustomerProfile(customerId: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerRepository.findOne({ where: { id: customerId } });

    if (!customer) {
      throw new CustomerNotFoundException();
    }


    Object.assign(customer, updateCustomerDto);
    await this.customerRepository.save(customer);
    
    return { message: 'Customer profile updated successfully' };
  }
}