import { Injectable } from '@nestjs/common';
import { CreateSocialApiDto } from './dto/create-social-api.dto';
import { UpdateSocialApiDto } from './dto/update-social-api.dto';

@Injectable()
export class SocialApiService {
  create(createSocialApiDto: CreateSocialApiDto) {
    return 'This action adds a new socialApi';
  }

  findAll() {
    return `This action returns all socialApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialApi`;
  }

  update(id: number, updateSocialApiDto: UpdateSocialApiDto) {
    return `This action updates a #${id} socialApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialApi`;
  }
}
