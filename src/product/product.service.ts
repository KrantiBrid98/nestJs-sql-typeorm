import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository, getManager } from 'typeorm';
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
        return await getManager()
        .createQueryBuilder(UsersEntity,'users')
        .addSelect('users.name','users.name')
        .addSelect('users.email','users.email')
        .addSelect('users.id','users.id')
        .addSelect('address.city','address.city')
        .addSelect('product.name','product.name')
        .innerJoin(AddressEntity, 'address', 'users.id = address.userId')
        .innerJoin(ProductEntity, 'product', 'address.userId = product.userId')
        .where(`users.id= ${userId}`)
        .getRawMany()
        // sql query
        // select users.name, users.email, users.id, address.state, product.name
        // from users 
        // inner join address on users.id = address.userId
        // inner join product on address.userId = product.userId
    }
}
