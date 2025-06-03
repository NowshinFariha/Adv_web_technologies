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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const custom_exceptions_1 = require("./exceptions/custom.exceptions");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    userRepository;
    jwtService;
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async signup(signupDto) {
        const { email, password } = signupDto;
        const userExists = await this.userRepository.findOne({ where: { email } });
        if (userExists) {
            throw new custom_exceptions_1.EmailAlreadyExistsException();
        }
        const user = new user_entity_1.User();
        user.email = email;
        user.password = password;
        await this.userRepository.save(user);
        return { message: ' registration complete' };
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user || user.password !== password) {
            throw new custom_exceptions_1.InvalidCredentialsException();
        }
        const payload = { email: user.email, sub: user.id };
        const token = this.jwtService.sign(payload);
        return { message: 'Login successful', token };
    }
    async forgotPassword(forgotPasswordDto) {
        const { email } = forgotPasswordDto;
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new custom_exceptions_1.UserNotFoundException();
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        console.log("OTP for ${email}: ${otp}");
        return { message: 'OTP sent to your email' };
    }
    async resetPassword(resetPasswordDto) {
        const { email, newPassword, otp } = resetPasswordDto;
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new custom_exceptions_1.UserNotFoundException();
        }
        if (otp !== 'valid-otp') {
            throw new custom_exceptions_1.OTPInvalidException();
        }
        user.password = newPassword;
        await this.userRepository.save(user);
        return { message: 'Password reset successful' };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map