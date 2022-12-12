import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { SocialApiModule } from './modules/social-api/social-api.module';
import { CommonModule } from './common/common.module';

import config from './config/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JoiValidationSchema } from './config/joi.validation';
import { MongooseModule } from '@nestjs/mongoose';
import { enviroments } from './enviroments';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: JoiValidationSchema,
      
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/digimuni-v2'),
    SocialApiModule,
    CommonModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
