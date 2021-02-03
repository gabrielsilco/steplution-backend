import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { Tutorial } from './interface/tutorial.interface';

@Injectable()
export class TutorialService {
    constructor(
        @InjectModel('Tutorial')
        private readonly tutorialModel: Model<Tutorial>
    ) {}

    async create(createTutorialDto: CreateTutorialDto): Promise<Tutorial> {
        const tutorialToCreate = new this.tutorialModel(createTutorialDto);
        return tutorialToCreate.save();
    }

    async getAll(): Promise<Tutorial[]> {
        return this.tutorialModel.find({});
    }

    async getById(tutorialId: string): Promise<Tutorial> {
        return this.tutorialModel.findById(tutorialId);
    }

    async updateById(tutorialId: string, newTutorialData: CreateTutorialDto | any): Promise<Tutorial> {
        return this.tutorialModel.findOneAndUpdate({ _id: tutorialId}, newTutorialData)
    }

    async deleteById(tutorialId: string) {
        return this.tutorialModel.findByIdAndDelete(tutorialId)
    }
}
