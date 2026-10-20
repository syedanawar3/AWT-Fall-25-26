import { IsNotEmpty, IsOptional } from "class-validator";
 
export class CreateProductDto {
  @IsNotEmpty()
  name!: string;
 
  @IsNotEmpty()
  category!: string;
 
  @IsNotEmpty()
  price!: number;
 
  @IsNotEmpty()
  quantity!: number;
}
 
export class UpdateProductDto {
  @IsOptional()
  name?: string;
 
  @IsOptional()
  category?: string;
 
  @IsOptional()
  price?: number;
 
  @IsOptional()
  quantity?: number;
}