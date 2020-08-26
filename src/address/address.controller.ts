import { Controller, Get, Param, Body, HttpStatus, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { MandatoryFieldsPipe } from 'src/mandatoryField.validation';

@Controller('address')
export class AddressController {
    constructor(private addressService: AddressService) { }

    @Get()
    async showAddress() {
        return await this.addressService.showAll();
    }

    @Post()
    // MandatoryFieldsPipe for validating whether 'userId', 'state', 'city' are provided in the body by user
    async createUsers(@Body(new MandatoryFieldsPipe(['userId', 'state', 'city'])) data) {
        return {
            statusCode: HttpStatus.OK,
            message: 'User added successfully',
            data: await this.addressService.create(data),
        };
    }

    @Get('/details/:id')
    async getUserDetails(@Param('id') userId: number) {
        return await this.addressService.showUserDetails(userId)
    }
}
