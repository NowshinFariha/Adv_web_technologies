export declare class EmailService {
    private transporter;
    sendEmail(to: string, subject: string, text: string): Promise<void>;
}
