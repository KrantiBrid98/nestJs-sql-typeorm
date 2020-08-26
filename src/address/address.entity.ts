import { Entity, Column,JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { UsersEntity } from "../users/users.entity"
import { ProductEntity } from "src/product/product.entity";


@Entity('address')
export class AddressEntity {

    @PrimaryGeneratedColumn()
    addressId: number;

    @Column()
    userId: number; // foreign key to user
    @ManyToOne(()=>UsersEntity, user => user.address)   // ManyToOne since many addresses can be associated with one user
    @JoinColumn({name: 'userId'})  // userId which is the name of column. @JoinColumn should be used on foreign key only
    user: UsersEntity // name of relationship used to query

    @ManyToOne(()=> ProductEntity, product => product.address)
    product: ProductEntity

    @Column()
    state: string;

    @Column()
    city: string;

}