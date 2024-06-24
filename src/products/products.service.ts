import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Category } from './entities/category.entity';
import { FindPRoductQueryDto } from './dto/FindProductQuery.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,
    @InjectModel(Products.name)
    private readonly productModel: Model<Products>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    console.log(createProductDto);
    const product = await this.productModel.create(createProductDto);
    console.log(product);
    return product;
  }

  async findAll(queryParams: FindPRoductQueryDto) {
    const query = {};
    for (const key in queryParams) {
      if (queryParams[key] !== undefined) {
        if (key === 'categoryId') {
          const category = await this.categoryModel.findById(queryParams[key]);
          console.log(category);

          query['category'] = { $in: category?.name };
        }
      }
    }
    return this.productModel.find(query);
  }

  async findOne(id: string) {
    let product: Products;
    if (!product && isValidObjectId(id)) {
      product = await this.productModel.findById(id);
    }
    if (!product) throw new NotFoundException('No existe chaval ese id');
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `a`;
  }

  remove(id: number) {
    return `a`;
  }
  async filters() {
    return this.categoryModel.find();
  }
}
