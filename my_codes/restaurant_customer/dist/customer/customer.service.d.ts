import { Repository } from 'typeorm';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { User } from 'src/auth/entities/user.entity';
export declare class CustomerProfileService {
    private customerRepository;
    constructor(customerRepository: Repository<User>);
    getCustomerProfile(userId: number): Promise<User>;
    updateCustomerProfile(customerId: number, updateCustomerDto: UpdateCustomerDto): Promise<{
        message: string;
    }>;
}
