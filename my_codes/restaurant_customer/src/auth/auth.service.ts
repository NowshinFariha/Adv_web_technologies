import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { EmailAlreadyExistsException, InvalidCredentialsException, UserNotFoundException, OTPInvalidException, TokenExpiredException } from './exceptions/custom.exceptions';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  // Register new customer
  async signup(signupDto: SignupDto) {
    const { email, password } = signupDto;

    const userExists = await this.userRepository.findOne({ where: { email } });
    if (userExists) {
      throw new EmailAlreadyExistsException();
    }

    const user = new User();
    user.email = email;
    user.password = password;  
    await this.userRepository.save(user);

    return { message: ' registration complete' };
  }

 
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user || user.password !== password) {
      throw new InvalidCredentialsException();
    }

 
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);

    return { message: 'Login successful', token };
  }

 
  async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    const { email } = forgotPasswordDto;
    const user = await this.userRepository.findOne({ where: { email } });
    
    if (!user) {
      throw new UserNotFoundException();
    }

  
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("OTP for ${email}: ${otp}");

   
    return { message: 'OTP sent to your email' };
  }

  
  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const { email, newPassword, otp } = resetPasswordDto;
    
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new UserNotFoundException();
    }

    
    if (otp !== 'valid-otp') {  
      throw new OTPInvalidException();
    }

    user.password = newPassword;
    await this.userRepository.save(user);

    return { message: 'Password reset successful' };
  }
}