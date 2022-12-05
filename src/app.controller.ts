import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

import { ApiKeyGuard } from './auth/guards/api-key.guard';
import { Public } from './auth/decorators/public.decorator';

@UseGuards(ApiKeyGuard)
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Public()
  @Get('public')
  getAll(){
    return this.appService.getAll();
  }

  @Get('private')
  getBlock(){
    return this.appService.getBlock();
  }
}
