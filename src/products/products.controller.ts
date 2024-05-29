import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
    @Get()
    getAllProducts(){
        return ["asas"]
    }
    @Post()
    createProduct(@Body() createProductDto:CreateProductDto){
        return createProductDto
    }
}
