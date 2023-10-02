import { HttpModule, HttpService, Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [HttpModule],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule { }
