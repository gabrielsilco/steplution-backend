import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        type: String,
        description: 'User username'
    })
    readonly username: string;

    @ApiProperty({
        type: String,
        description: 'User password'
    })
    password: string;    
}

