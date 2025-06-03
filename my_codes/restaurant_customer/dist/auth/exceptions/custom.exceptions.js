"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenExpiredException = exports.UserNotFoundException = exports.OTPInvalidException = exports.InvalidCredentialsException = exports.EmailAlreadyExistsException = void 0;
const common_1 = require("@nestjs/common");
class EmailAlreadyExistsException extends common_1.HttpException {
    constructor() {
        super('Email already exists', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.EmailAlreadyExistsException = EmailAlreadyExistsException;
class InvalidCredentialsException extends common_1.HttpException {
    constructor() {
        super('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.InvalidCredentialsException = InvalidCredentialsException;
class OTPInvalidException extends common_1.HttpException {
    constructor() {
        super('Invalid OTP', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.OTPInvalidException = OTPInvalidException;
class UserNotFoundException extends common_1.HttpException {
    constructor() {
        super('User not found', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.UserNotFoundException = UserNotFoundException;
class TokenExpiredException extends common_1.HttpException {
    constructor() {
        super('OTP token expired', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.TokenExpiredException = TokenExpiredException;
//# sourceMappingURL=custom.exceptions.js.map