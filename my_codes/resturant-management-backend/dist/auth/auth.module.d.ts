import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<TypeOrmModuleOptions>;
}[];
