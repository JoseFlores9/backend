import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(
  @InjectModel (Products.name)
  private readonly productModel: Model<Products >,
  ){}

  async create(createProductDto: CreateProductDto) {
    console.log(createProductDto)
    const product = await this.productModel.create(createProductDto);
    console.log(product)
    return product ;
  }

  findAll() {
    return this.productModel.find() ;
  }

  async findOne(id: string) {
    let product : Products
    if(!product && isValidObjectId(id)){
      product = await this.productModel.findById(id)
    }
    if(!product)
      throw new NotFoundException("No existe chaval ese id")
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `a`;
  }

  remove(id: number) {
    return `a`;
  }
}
