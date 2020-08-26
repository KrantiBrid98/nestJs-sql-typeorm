import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersEntity } from './users.entity';
import { UsersDTO } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  async showAll(page, limit) {
    // .find() will return all data
    return await this.usersRepository.findAndCount({
        take: limit,          // limit
        skip: (page-1)*limit  // offset
    });
  }

  async create(data: UsersDTO) {
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(data);
    return user;
  }

  async findByEmail(email: string): Promise<UsersDTO> {
    return await this.usersRepository.findOne({where: { email } });
  }

  async read(id: number) {
    return await this.usersRepository.findOne({ where: { id } });
  }

  async update(id: number, data: Partial<UsersDTO>) {
    await this.usersRepository.update({ id }, data);
    return await this.usersRepository.findOne({ id });
  }

  async destroy(id: number) {
    await this.usersRepository.delete({ id });
    return { deleted: true };
  }

  async getUserDetails(id: number){
    await this.usersRepository.find()
  }

  async readUserAddress(id:number){
    return this.usersRepository.find({ where: { id }, relations: ["address"] });
  }
}