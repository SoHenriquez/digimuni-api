import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { SocialApiModule } from './modules/social-api/social-api.module';
import { CommonModule } from './common/common.module';
import { EnvConfiguration } from './config/env.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
    }),
    SocialApiModule,
    CommonModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
