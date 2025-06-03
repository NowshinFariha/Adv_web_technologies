import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';
import { FilterMenuDto } from './dto/filter-menu.dto';
export declare class MenuService {
    private menuRepository;
    constructor(menuRepository: Repository<Menu>);
    getAllMenuItems(filterMenuDto: FilterMenuDto): Promise<Menu[]>;
    generateMenuPdf(): Promise<Buffer>;
}
