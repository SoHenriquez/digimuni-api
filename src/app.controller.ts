import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { ApiKeyGuard } from './auth/guards/api-key.guard'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':term')
  getAll(){
    return this.appService.getAll();
  }

  @Get()
  getBlock(){
    return this.appService.getBlock();
  }
}
