import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { UsersEntity } from "src/users/users.entity";
import { AddressEntity } from "src/address/address.entity";


@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    userId: number;   // foreign key
    @ManyToOne(() => UsersEntity, user => user.product)
    @JoinColumn({name: 'userId'})
    user: UsersEntity[];

    @Column()
    addressId: number;   // foreign key
    @OneToMany(() => AddressEntity, address => address.product)
    @JoinColumn({name: 'addressId'})
    address: UsersEntity[];

}
