"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerProfileModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_controller_1 = require("./customer.controller");
const customer_service_1 = require("./customer.service");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const user_entity_1 = require("../auth/entities/user.entity");
let CustomerProfileModule = class CustomerProfileModule {
};
exports.CustomerProfileModule = CustomerProfileModule;
exports.CustomerProfileModule = CustomerProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [customer_controller_1.CustomerProfileController],
        providers: [customer_service_1.CustomerProfileService, jwt_auth_guard_1.JwtAuthGuard],
    })
], CustomerProfileModule);
//# sourceMappingURL=customer.module.js.map