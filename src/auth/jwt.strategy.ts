import { UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { Strategy, ExtractJwt } from 'passport-jwt'
import { User } from "src/user/interface/user.interface";
import { JwtPayload } from "./jwt-payload.interface";

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectModel('User')
        private userModel: Model<User>
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'xablau'
        });
    }

    async validate(payload: JwtPayload): Promise<User> {
        const { username } = payload;
        const user = await this.userModel.findOne({ username });

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}