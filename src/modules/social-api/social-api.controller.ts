import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialApiService } from './social-api.service';
import { CreateSocialApiDto } from './dto/create-social-api.dto';
import { UpdateSocialApiDto } from './dto/update-social-api.dto';

@Controller('social-api')
export class SocialApiController {
  constructor(private readonly socialApiService: SocialApiService) {}

  @Post()
  create(@Body() createSocialApiDto: CreateSocialApiDto) {
    return this.socialApiService.create(createSocialApiDto);
  }

  @Get()
  findAll() {
    return this.socialApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocialApiDto: UpdateSocialApiDto) {
    return this.socialApiService.update(+id, updateSocialApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialApiService.remove(+id);
  }
}
