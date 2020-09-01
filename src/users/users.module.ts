import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity]), 
    forwardRef(()=>AuthModule)  // forwardRef for resolving circular defendencies between AuthModule and UserModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService] //imp exporting userservices so that it can be used in other modules like auth.modules
})
export class UsersModule {}