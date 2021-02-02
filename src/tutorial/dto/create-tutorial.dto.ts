import { ApiProperty } from "@nestjs/swagger";
import { CreateStepDto } from "./create-step.dto";

export class CreateTutorialDto {
    @ApiProperty({
        type: String,
        description: 'Tutorial title'
    })
    readonly title: string;


    @ApiProperty({
        type: String,
        description: 'Tutorial type'
    })
    readonly type: string;

    @ApiProperty({
        type: [CreateStepDto],
        description: 'Tutorial default steps'
    })
    readonly defaultSteps: () => CreateStepDto
}