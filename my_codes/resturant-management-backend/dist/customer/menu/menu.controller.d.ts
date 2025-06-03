import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    create(createMenuDto: CreateMenuDto): Promise<import("./menu.entity").Menu>;
}
