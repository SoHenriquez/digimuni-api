import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { SocialApiService } from './social-api.service';
import { Public } from '../../auth/decorators/public.decorator';


@UseGuards(JwtAuthGuard)
@Controller('social-api')
export class SocialApiController {
  constructor(private readonly socialApiService: SocialApiService) {}

  @Public()
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
