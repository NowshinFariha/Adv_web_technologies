import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailAlreadyExistsException extends HttpException {
  constructor() {
    super('Email already exists', HttpStatus.BAD_REQUEST);
  }
}

export class InvalidCredentialsException extends HttpException {
  constructor() {
    super('Invalid credentials', HttpStatus.UNAUTHORIZED);
  }
}

export class OTPInvalidException extends HttpException {
  constructor() {
    super('Invalid OTP', HttpStatus.BAD_REQUEST);
  }
}

export class UserNotFoundException extends HttpException {
  constructor() {
    super('User not found', HttpStatus.NOT_FOUND);
  }
}

export class TokenExpiredException extends HttpException {
  constructor() {
    super('OTP token expired', HttpStatus.FORBIDDEN);
  }
}