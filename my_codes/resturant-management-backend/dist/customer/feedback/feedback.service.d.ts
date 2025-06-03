import { Feedback } from './feedback.entity';
import { Repository } from 'typeorm';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
export declare class FeedbackService {
    private feedbackRepository;
    constructor(feedbackRepository: Repository<Feedback>);
    createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<Feedback>;
}
