import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateQuestionDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(30)
    riddle: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    answer: string;
}
