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
exports.CustomerProfileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const custom_exceptions_1 = require("./exceptions/custom.exceptions");
const user_entity_1 = require("../auth/entities/user.entity");
let CustomerProfileService = class CustomerProfileService {
    customerRepository;
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async getCustomerProfile(userId) {
        const user = await this.customerRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('Customer not found');
        }
        return user;
    }
    async updateCustomerProfile(customerId, updateCustomerDto) {
        const customer = await this.customerRepository.findOne({ where: { id: customerId } });
        if (!customer) {
            throw new custom_exceptions_1.CustomerNotFoundException();
        }
        Object.assign(customer, updateCustomerDto);
        await this.customerRepository.save(customer);
        return { message: 'Customer profile updated successfully' };
    }
};
exports.CustomerProfileService = CustomerProfileService;
exports.CustomerProfileService = CustomerProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomerProfileService);
//# sourceMappingURL=customer.service.js.map