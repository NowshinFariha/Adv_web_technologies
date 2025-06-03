"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateFoodNamePipe = void 0;
const common_1 = require("@nestjs/common");
let ValidateFoodNamePipe = class ValidateFoodNamePipe {
    transform(value) {
        if (value.foodName && value.foodName.length < 3) {
            throw new common_1.BadRequestException('Food name must be at least 3 characters long');
        }
        return value;
    }
};
exports.ValidateFoodNamePipe = ValidateFoodNamePipe;
exports.ValidateFoodNamePipe = ValidateFoodNamePipe = __decorate([
    (0, common_1.Injectable)()
], ValidateFoodNamePipe);
//# sourceMappingURL=validate-food-name.pipe.js.map