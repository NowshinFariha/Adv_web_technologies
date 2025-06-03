import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomerNotFoundException extends HttpException {
  constructor() {
    super('Customer not found', HttpStatus.NOT_FOUND);
  }
}

export class UnauthorizedAccessException extends HttpException {
  constructor() {
    super('Unauthorized access. Please login first', HttpStatus.UNAUTHORIZED);
  }
}

export class InvalidDataException extends HttpException {
  constructor() {
    super('Invalid data provided', HttpStatus.BAD_REQUEST);
  }
}
