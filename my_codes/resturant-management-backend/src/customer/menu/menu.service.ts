import { Injectable } from '@nestjs/common';
import { NotFoundException } from '../../common/exceptions/not-found.exception';
import { Menu } from './menu.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  async createMenu(createMenuDto: CreateMenuDto): Promise<Menu> {
    const menu = new Menu();
    menu.name = createMenuDto.name;
    menu.description = createMenuDto.description;
    menu.price = createMenuDto.price;
    return this.menuRepository.save(menu);
  }
}