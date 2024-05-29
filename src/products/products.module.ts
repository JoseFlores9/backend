import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Products, ProductsSchema } from './entities/products.entity';

@Module({
  controllers: [ProductsController],
  imports: [MongooseModule.forFeature([{name: Products.name, schema:ProductsSchema}])]
})
export class ProductsModule {}
