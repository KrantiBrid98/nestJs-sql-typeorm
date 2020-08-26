import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private addressRepository: Repository<AddressEntity>,
    ) { }

    async showAll() {
        return await this.addressRepository.find();
    }

    async create(data) {
        const details = this.addressRepository.create(data);
        await this.addressRepository.save(data);
        return details;
    }

    async showUserDetails(userId: number) {
        return await this.addressRepository.createQueryBuilder('n')
            .innerJoinAndSelect("n.user", "user")
            .where(`n.userId=${userId}`)
            .getMany();
    }
    // OR 
    // async showUserDetails(userId: number) {
    //     return await this.addressRepository.findOne({ where: { userId }, relations: ["user"] });
    // }

}
