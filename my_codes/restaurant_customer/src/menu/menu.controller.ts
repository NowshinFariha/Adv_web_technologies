import { Controller, Get, Post, Body, Query,Res, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { MenuService } from './menu.service';
import { FilterMenuDto } from './dto/filter-menu.dto';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}


  @Get('all_menu')
  //@UseGuards(JwtAuthGuard)
async getAllMenuItems(@Query() filterMenuDto: FilterMenuDto) {
  return this.menuService.getAllMenuItems(filterMenuDto);
}

@Get('download-pdf')
  async downloadMenuPdf(@Res() res: Response) {
    const pdfBuffer = await this.menuService.generateMenuPdf();
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="menu.pdf"',
    });
    res.send(pdfBuffer);
  }
}