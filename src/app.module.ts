import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductsModule,
    MongooseModule.forRoot("mongodb+srv://dev:1234@cluster0.uaj2upz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/fitRat")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
