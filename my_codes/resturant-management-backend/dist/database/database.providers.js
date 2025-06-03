"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const reservation_entity_1 = require("../customer/reservation/reservation.entity");
const order_entity_1 = require("../customer/order/order.entity");
const menu_entity_1 = require("../customer/menu/menu.entity");
const payment_entity_1 = require("../customer/payment/payment.entity");
const feedback_entity_1 = require("../customer/feedback/feedback.entity");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => ({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: 5432,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [reservation_entity_1.Reservation, order_entity_1.Order, menu_entity_1.Menu, payment_entity_1.Payment, feedback_entity_1.Feedback],
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map