import { Controller, Get, Put, Body, UseGuards, Request, Req, Patch} from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CustomerProfileService } from './customer.service';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerProfileController {
  constructor(private readonly customerProfileService: CustomerProfileService) {}

  
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getCustomerProfile(@Req() req: any) {
    return this.customerProfileService.getCustomerProfile(req.user.id);
  }

 
  @Patch('update')
  @UseGuards(JwtAuthGuard)
  async updateCustomerProfile(@Body() updateCustomerDto: UpdateCustomerDto, @Request() req) {
    return this.customerProfileService.updateCustomerProfile(req.user.id, updateCustomerDto);
  }
}