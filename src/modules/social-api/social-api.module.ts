import { Module } from '@nestjs/common';
import { SocialApiService } from './social-api.service';
import { SocialApiController } from './social-api.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports:[
    UsersModule,
    ConfigModule
  ],
  controllers: [SocialApiController],
  providers: [SocialApiService]
})
export class SocialApiModule {}
