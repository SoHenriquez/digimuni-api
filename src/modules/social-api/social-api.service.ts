import { Injectable } from '@nestjs/common';
@Injectable()
export class SocialApiService {
  
  findAll() {
    return `This action returns all socialApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialApi`;
  }
}
