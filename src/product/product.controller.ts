import { Controller, Get, HttpStatus, Body, Post, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { MandatoryFieldsPipe } from 'src/mandatoryField.validation';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get()
    async showAddress() {
        return await this.productService.showAll();
    }

    @Post()
    // MandatoryFieldsPipe for validating whether 'name','userId', 'addressId' are provided in the body by user
    async createUsers(@Body(new MandatoryFieldsPipe(['name','userId', 'addressId'])) data) {
        return {
            statusCode: HttpStatus.OK,
            message: 'User added successfully',
            data: await this.productService.create(data),
        };
    }

    // fetches record from user, product and address table using inner join
    @Get('/details/:id')
    async getUserDetails(@Param('id') userId: number) {
        return await this.productService.showUserDetails(userId)
    }
}
