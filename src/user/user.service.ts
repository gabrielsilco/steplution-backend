import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto'
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User')
        private readonly userModel: Model<User>
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const userToCreate = new this.userModel(createUserDto);
        userToCreate.password = await bcrypt.hash(userToCreate.password, 12);
        return userToCreate.save();
    }

    async getAll(): Promise<User[]> {
        return this.userModel.find({});
    }

    async getById(userId: string): Promise<User> {
        return this.userModel.findById(userId);
    }

    async deleteById(userId: string) {
        return this.userModel.findByIdAndDelete(userId)
    }
}
