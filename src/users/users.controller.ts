import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
  Query,
  DefaultValuePipe,
  ParseIntPipe
} from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersDTO } from './users.dto';
import { MandatoryFieldsPipe } from 'src/mandatoryField.validation';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  async showAllUsers(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.usersService.showAll(page, limit),
    };
  }

  @Post()
  // MandatoryFieldsPipe for validating whether 'name', 'email', 'password' are provided in the body by user
  async createUsers(@Body(new MandatoryFieldsPipe(['name', 'email', 'password'])) data: UsersDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'User added successfully',
      data: await this.usersService.create(data),
    };
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.usersService.read(id),
    };
  }

  @Patch(':id')
  async uppdateUser(@Param('id') id: number, @Body() data: Partial<UsersDTO>) {
    return {
      statusCode: HttpStatus.OK,
      message: 'User update successfully',
      data: await this.usersService.update(id, data),
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.usersService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }

  @Get('/details/:id')
  async readUserAddress(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.usersService.readUserAddress(id),
    };
  }
  
}