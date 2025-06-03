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
exports.CustomerProfileController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const customer_service_1 = require("./customer.service");
const update_customer_dto_1 = require("./dto/update-customer.dto");
let CustomerProfileController = class CustomerProfileController {
    customerProfileService;
    constructor(customerProfileService) {
        this.customerProfileService = customerProfileService;
    }
    async getCustomerProfile(req) {
        return this.customerProfileService.getCustomerProfile(req.user.id);
    }
    async updateCustomerProfile(updateCustomerDto, req) {
        return this.customerProfileService.updateCustomerProfile(req.user.id, updateCustomerDto);
    }
};
exports.CustomerProfileController = CustomerProfileController;
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomerProfileController.prototype, "getCustomerProfile", null);
__decorate([
    (0, common_1.Patch)('update'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_customer_dto_1.UpdateCustomerDto, Object]),
    __metadata("design:returntype", Promise)
], CustomerProfileController.prototype, "updateCustomerProfile", null);
exports.CustomerProfileController = CustomerProfileController = __decorate([
    (0, common_1.Controller)('customer'),
    __metadata("design:paramtypes", [customer_service_1.CustomerProfileService])
], CustomerProfileController);
//# sourceMappingURL=customer.controller.js.map