import { HttpException, HttpStatus } from '@nestjs/common';

export class MenuNotFoundException extends HttpException {
  constructor() {
    super('Menu item not found', HttpStatus.NOT_FOUND);
  }
}

export class InvalidFoodNameException extends HttpException {
  constructor() {
    super('Invalid food name provided', HttpStatus.BAD_REQUEST);
  }
}