import { Module } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { ResourceController } from './resource.controller';
import { Product } from './entities/resource.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImage } from './entities/image.entity';

@Module({
  controllers: [ResourceController],
  providers: [ResourceService],
  imports: [TypeOrmModule.forFeature([Product, ProductImage])],
})
export class ResourceModule {}
