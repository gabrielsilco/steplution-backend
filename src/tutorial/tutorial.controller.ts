import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { TutorialService } from './tutorial.service';

@UseGuards(AuthGuard())
@ApiBearerAuth('JWT')
@ApiTags('tutorial')
@Controller('tutorial')
export class TutorialController {
    constructor(private readonly tutorialService: TutorialService) {}

    @Post('create')
    async createUser(@Body() createTutorialDto: CreateTutorialDto) {
        return await this.tutorialService.create(createTutorialDto)
    }

    @Get('getAll')
    async getAll() {
        return await this.tutorialService.getAll()
    }

    @Get('getById/:id')
    async getById(@Param('id') id: string) {
        return await this.tutorialService.getById(id);
    }

    @Put('updateById/:id')
    async updateById(@Param('id') id: string, @Body() newTutorialData: CreateTutorialDto) {
        return await this.tutorialService.updateById(id, newTutorialData)
    }

    @Delete('delete/:id')
    async deleteUser(@Param('id') id: string) {
        return await this.tutorialService.deleteById(id)
    }
}
