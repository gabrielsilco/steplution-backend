import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/interface/user.interface';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('User')
        private readonly userModel: Model<User>,
        private jwtService: JwtService
    ) {}

    async validateUser(loginDto: LoginDto): Promise<any> {
        const userToLogin = await this.userModel.findOne({ username: loginDto.username });
        const doMatch = await bcrypt.compare(loginDto.password, userToLogin.password);

        const username = userToLogin.username

        if (username && doMatch) {
            const payload: JwtPayload = { username }
            const accessToken = await this.jwtService.sign(payload);
            return { accessToken }
        } else {
            throw new UnauthorizedException('Invalid credentials')
        }
    }
}
