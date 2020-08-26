import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { AddressEntity } from 'src/address/address.entity';
import { UsersEntity } from 'src/users/users.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,
    ) { }

    async showAll() {
        return await this.productRepository.find();
    }

    async create(data) {
        const details = this.productRepository.create(data);
        await this.productRepository.save(data);
        return details;
    }

     async showUserDetails(userId: number) {
        return await this.productRepository.createQueryBuilder('t1') // t1 = product
            .addSelect('t1.id', 't1_id') 
            .addSelect('t2.city', 't2_city') // t2 = address
            .addSelect('t3.email', 't3_email')  // t3 = user
            .innerJoin(AddressEntity, 't2', `t1.userId = ${userId}`)
            .innerJoin(UsersEntity, 't3', `t2.userId = ${userId}`)
            .getRawMany()      
    }
}
