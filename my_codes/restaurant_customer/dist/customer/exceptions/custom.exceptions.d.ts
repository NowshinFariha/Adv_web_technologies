import { HttpException } from '@nestjs/common';
export declare class CustomerNotFoundException extends HttpException {
    constructor();
}
export declare class UnauthorizedAccessException extends HttpException {
    constructor();
}
export declare class InvalidDataException extends HttpException {
    constructor();
}
