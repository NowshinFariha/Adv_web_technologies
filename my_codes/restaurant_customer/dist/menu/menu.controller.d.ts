import { MenuService } from './menu.service';
import { FilterMenuDto } from './dto/filter-menu.dto';
import { Response } from 'express';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    getAllMenuItems(filterMenuDto: FilterMenuDto): Promise<import("./entities/menu.entity").Menu[]>;
    downloadMenuPdf(res: Response): Promise<void>;
}
