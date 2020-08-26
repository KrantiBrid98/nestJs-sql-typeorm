import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany, ManyToMany } from 'typeorm';
import * as crypto from 'crypto';
import { AddressEntity } from 'src/address/address.entity';
import { ProductEntity } from 'src/product/product.entity';


//pass the name of table inside @Entity() i.e "users", if you don't pass table name it will create "users_entity" table by default
@Entity('users')
export class UsersEntity {
  // @PrimaryGeneratedColumn() field is used to specify the primary column & auto generate the column.
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default: ''})
  name: string;

  @Column({default: ''})
  email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  @Column({default: ''})
  password: string;

  @OneToMany(()=>AddressEntity, address => address.user) // ONE user can have MANY addresses
  address: AddressEntity[];   // address from user.address in addressEntity 

  @OneToMany(()=>ProductEntity, product => product.user)
  product: ProductEntity[];
}