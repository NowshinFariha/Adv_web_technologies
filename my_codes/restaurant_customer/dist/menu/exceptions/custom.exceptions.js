"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidFoodNameException = exports.MenuNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class MenuNotFoundException extends common_1.HttpException {
    constructor() {
        super('Menu item not found', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.MenuNotFoundException = MenuNotFoundException;
class InvalidFoodNameException extends common_1.HttpException {
    constructor() {
        super('Invalid food name provided', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.InvalidFoodNameException = InvalidFoodNameException;
//# sourceMappingURL=custom.exceptions.js.map