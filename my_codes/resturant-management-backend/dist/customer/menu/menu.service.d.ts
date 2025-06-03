import { Menu } from './menu.entity';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
export declare class MenuService {
    private menuRepository;
    constructor(menuRepository: Repository<Menu>);
    createMenu(createMenuDto: CreateMenuDto): Promise<Menu>;
}
