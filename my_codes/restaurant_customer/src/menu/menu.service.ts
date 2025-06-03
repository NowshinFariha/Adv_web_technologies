import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';
import { CreateMenuDto } from './dto/create-menu.dto';
import { FilterMenuDto } from './dto/filter-menu.dto';
import { MenuNotFoundException } from './exceptions/custom.exceptions';
import * as PDFDocument from 'pdfkit';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}


  async getAllMenuItems(filterMenuDto: FilterMenuDto) {
    let menuItems = this.menuRepository.createQueryBuilder('menu');
    if(menuItems == null) {
      throw new MenuNotFoundException();
    }
    if (filterMenuDto.foodName) {
      menuItems = menuItems.where('menu.foodName LIKE :foodName', { foodName: `%${filterMenuDto.foodName}%` });
    }

   

    return await menuItems.getMany();
  }


  async generateMenuPdf(): Promise<Buffer> {
    const menuItems = await this.menuRepository.find();

    const doc = new PDFDocument();
    const buffers: Buffer[] = [];

    doc.on('data', (chunk) => buffers.push(chunk));
    doc.on('end', () => {});

    doc
    .rect(0, 0, doc.page.width, doc.page.height) // Full-page rectangle
    .fill('#E7DDFF'); // background color


    // Add title
    doc
    .fontSize(25)
    .fillColor('#4CAF50') // title color
    .text('Restaurant', { align: 'center' });

    doc
    .fontSize(20)
    .fillColor('#000000') // Black color
    .text('Menu Card', { align: 'center' });

    doc.moveDown();

    // Draw a border around the menu card
    doc
    .rect(40, 40, doc.page.width - 80, doc.page.height - 80)
    .strokeColor('#4CAF50') // Green border
    .lineWidth(2)
    .stroke();

    // Add a stylish font for menu items
    doc.font('Helvetica-Bold');

    // Add menu items
    menuItems.forEach((item, index) => {
      doc
      .fontSize(16)
      .fillColor('#060270') // Black color
      .text(`Name: ${item.foodName}`, { align: 'center' });

      doc
      .fontSize(14)
      .fillColor('#555555') // Gray color
      .text(`Description: ${item.description}`, { align: 'center' });

      doc
      .fontSize(14)
      .fillColor('#000000') // Black color
      .text(`Price: $${item.price}`, { align: 'center' });

      if (index < menuItems.length - 1) {
        doc
          .moveDown()
          .strokeColor('#CCCCCC') // Light gray line
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
  

}

