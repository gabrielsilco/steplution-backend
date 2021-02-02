import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TutorialSchema } from './schema/tutorial.schema';
import { TutorialController } from './tutorial.controller';
import { TutorialService } from './tutorial.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Tutorial', schema: TutorialSchema }
    ])
  ],
  controllers: [TutorialController],
  providers: [TutorialService]
})
export class TutorialModule {}
