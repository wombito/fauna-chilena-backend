import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionDto } from './create-question.dto';

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {}
// PartialType create a new class based on CreateQuestionDto with all properties set to optional
// riddle?: string; answer?: string;