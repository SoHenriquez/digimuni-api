import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {


  getHello(): string {
    return 'This is -> Hello World!';
  }

  getAll(){
    return '<----------- Acceso libre ----------->';
  }

  getBlock(){
    return '<----------- Acceso seguro ----------->';
  }
}
