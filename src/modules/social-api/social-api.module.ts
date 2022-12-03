import { Module } from '@nestjs/common';
import { SocialApiService } from './social-api.service';
import { SocialApiController } from './social-api.controller';

@Module({
  controllers: [SocialApiController],
  providers: [SocialApiService]
})
export class SocialApiModule {}
