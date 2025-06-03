"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const menu_entity_1 = require("./entities/menu.entity");
const custom_exceptions_1 = require("./exceptions/custom.exceptions");
const PDFDocument = require("pdfkit");
let MenuService = class MenuService {
    menuRepository;
    constructor(menuRepository) {
        this.menuRepository = menuRepository;
    }
    async getAllMenuItems(filterMenuDto) {
        let menuItems = this.menuRepository.createQueryBuilder('menu');
        if (menuItems == null) {
            throw new custom_exceptions_1.MenuNotFoundException();
        }
        if (filterMenuDto.foodName) {
            menuItems = menuItems.where('menu.foodName LIKE :foodName', { foodName: `%${filterMenuDto.foodName}%` });
        }
        return await menuItems.getMany();
    }
    async generateMenuPdf() {
        const menuItems = await this.menuRepository.find();
        const doc = new PDFDocument();
        const buffers = [];
        doc.on('data', (chunk) => buffers.push(chunk));
        doc.on('end', () => { });
        doc
            .rect(0, 0, doc.page.width, doc.page.height)
            .fill('#E7DDFF');
        doc
            .fontSize(25)
            .fillColor('#4CAF50')
            .text('Restaurant', { align: 'center' });
        doc
            .fontSize(20)
            .fillColor('#000000')
            .text('Menu Card', { align: 'center' });
        doc.moveDown();
        doc
            .rect(40, 40, doc.page.width - 80, doc.page.height - 80)
            .strokeColor('#4CAF50')
            .lineWidth(2)
            .stroke();
        doc.font('Helvetica-Bold');
        menuItems.forEach((item, index) => {
            doc
                .fontSize(16)
                .fillColor('#060270')
                .text(`Name: ${item.foodName}`, { align: 'center' });
            doc
                .fontSize(14)
                .fillColor('#555555')
                .text(`Description: ${item.description}`, { align: 'center' });
            doc
                .fontSize(14)
                .fillColor('#000000')
                .text(`Price: $${item.price}`, { align: 'center' });
            if (index < menuItems.length - 1) {
                doc
                    .moveDown()
                    .strokeColor('#CCCCCC')
                    .lineWidth(1)
                    .moveTo(50, doc.y)
                    .lineTo(doc.page.width - 50, doc.y)
                    .stroke();
            }
            doc.moveDown();
        });
        doc.end();
        return new Promise((resolve) => {
            doc.on('end', () => {
                const pdfBuffer = Buffer.concat(buffers);
                resolve(pdfBuffer);
            });
        });
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_entity_1.Menu)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MenuService);
//# sourceMappingURL=menu.service.js.map