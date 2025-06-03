import { PipeTransform } from '@nestjs/common';
import { FilterMenuDto } from '../dto/filter-menu.dto';
export declare class ValidateFoodNamePipe implements PipeTransform {
    transform(value: FilterMenuDto): FilterMenuDto;
}
