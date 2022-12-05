import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";


export class CreateUserDto {
    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    @MinLength(8)
    @MaxLength(15)
    password: string;
    
    @IsString()
    @MinLength(1)
    email: string;
    @IsNotEmpty()
    readonly role : string;
}
