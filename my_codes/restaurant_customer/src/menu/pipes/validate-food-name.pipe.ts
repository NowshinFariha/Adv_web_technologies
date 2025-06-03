import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { FilterMenuDto } from '../dto/filter-menu.dto';

@Injectable()
export class ValidateFoodNamePipe implements PipeTransform {
  transform(value: FilterMenuDto) {
    if (value.foodName && value.foodName.length < 3) {
      throw new BadRequestException('Food name must be at least 3 characters long');
    }
    return value;
  }
}
