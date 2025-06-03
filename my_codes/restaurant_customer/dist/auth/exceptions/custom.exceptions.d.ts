import { HttpException } from '@nestjs/common';
export declare class EmailAlreadyExistsException extends HttpException {
    constructor();
}
export declare class InvalidCredentialsException extends HttpException {
    constructor();
}
export declare class OTPInvalidException extends HttpException {
    constructor();
}
export declare class UserNotFoundException extends HttpException {
    constructor();
}
export declare class TokenExpiredException extends HttpException {
    constructor();
}
