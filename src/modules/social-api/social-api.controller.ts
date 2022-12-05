import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialApiService } from './social-api.service';
@Controller('social-api')
export class SocialApiController {
  constructor(private readonly socialApiService: SocialApiService) {}


  @Get()
  findAll() {
    return this.socialApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialApiService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialApiService.remove(+id);
  }
}
