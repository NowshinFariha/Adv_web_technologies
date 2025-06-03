import { Injectable } from '@nestjs/common';
import { Feedback } from './feedback.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,
  ) {}

  async createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const feedback = new Feedback();
    feedback.customerName = createFeedbackDto.customerName;
    feedback.message = createFeedbackDto.message;
    return this.feedbackRepository.save(feedback);
  }
}
