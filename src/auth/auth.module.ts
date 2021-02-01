import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [
    AuthController
  ],
  providers: [AuthService]
})
export class AuthModule {}
