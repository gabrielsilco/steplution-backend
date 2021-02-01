import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('create')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto)
    }

    @Get('getAll')
    async getAll() {
        return await this.userService.getAll()
    }

    @Get('getById/:id')
    async getById(@Param('id') id: string) {
        return await this.userService.getById(id);
    }

    @Delete('delete/:id')
    async deleteUser(@Param('id') id: string) {
        return await this.userService.deleteById(id)
    }
}
