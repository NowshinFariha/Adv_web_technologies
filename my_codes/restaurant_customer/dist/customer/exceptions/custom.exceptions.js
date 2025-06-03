"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidDataException = exports.UnauthorizedAccessException = exports.CustomerNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class CustomerNotFoundException extends common_1.HttpException {
    constructor() {
        super('Customer not found', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.CustomerNotFoundException = CustomerNotFoundException;
class UnauthorizedAccessException extends common_1.HttpException {
    constructor() {
        super('Unauthorized access. Please login first', common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.UnauthorizedAccessException = UnauthorizedAccessException;
class InvalidDataException extends common_1.HttpException {
    constructor() {
        super('Invalid data provided', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.InvalidDataException = InvalidDataException;
//# sourceMappingURL=custom.exceptions.js.map