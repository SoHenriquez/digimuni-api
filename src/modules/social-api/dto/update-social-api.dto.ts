import { PartialType } from '@nestjs/mapped-types';
import { CreateSocialApiDto } from './create-social-api.dto';

export class UpdateSocialApiDto extends PartialType(CreateSocialApiDto) {}
