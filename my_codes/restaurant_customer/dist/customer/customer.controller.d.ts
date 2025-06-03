import { CustomerProfileService } from './customer.service';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomerProfileController {
    private readonly customerProfileService;
    constructor(customerProfileService: CustomerProfileService);
    getCustomerProfile(req: any): Promise<import("../auth/entities/user.entity").User>;
    updateCustomerProfile(updateCustomerDto: UpdateCustomerDto, req: any): Promise<{
        message: string;
    }>;
}
