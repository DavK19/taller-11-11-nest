import { CreateProductDto } from './create-resource.dto';

export class PaginationDto extends CreateProductDto {
  limit?: number;
  offset?: number;
}
