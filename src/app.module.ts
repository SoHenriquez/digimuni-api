import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocialApiModule } from './modules/social-api/social-api.module';

@Module({
  imports: [SocialApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
