import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { TutorialSchema } from './schema/tutorial.schema';
import { TutorialController } from './tutorial.controller';
import { TutorialService } from './tutorial.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Tutorial', schema: TutorialSchema },
    ]),
    AuthModule
  ],
  controllers: [TutorialController],
  providers: [TutorialService]
})
export class TutorialModule {}
