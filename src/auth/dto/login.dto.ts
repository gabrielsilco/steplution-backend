import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty({
        type: String,
        description: 'Username'
    })
    readonly username: string;

    @ApiProperty({
        type: String,
        description: 'Password'
    })
    readonly password: string;
}