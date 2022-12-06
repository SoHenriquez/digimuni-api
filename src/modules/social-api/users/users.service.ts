import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  private defaultLimit: number;

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly configService: ConfigService,
  ) {
    this.defaultLimit = configService.get<number>('defaultLimit');
  }

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...rta } = createUserDto;
      const hashPassword = await bcrypt.hash(password, 10);
      createUserDto = { ...createUserDto, password: hashPassword };
      await this.userModel.create(createUserDto); //Validaciones aquí
      return rta;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email: email }).exec();
    return user;
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = this.defaultLimit, offset = 0 } = paginationDto;
    return this.userModel.find()
      .limit(limit)
      .skip(offset)
      .sort({
        role: 1
      })
      .select('-__v');
  }

  async findOne(id: string) {
    let user: User;
    if (!user && isValidObjectId(id)) user = await this.userModel.findById(id);

    if (!user)
      throw new NotFoundException(`User with id "${id}" not found`);

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    try {
      await user.updateOne(updateUserDto);
      return { ...user.toJSON(), ...updateUserDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.userModel.deleteOne({ _id: id });
    if (deletedCount === 0)
      throw new BadRequestException(`User with id "${id}" not found.`);

    return;
  }

  //metodo para manjear errores de duplicado
  private handleExceptions(error: any) {
    //Error 11000 es por objeto duplicado en bd
    if (error.code === 11000)
      throw new BadRequestException(`User exists in db ${JSON.stringify(error.keyValue)}`);

    console.log(error);
    throw new InternalServerErrorException(`Can´t create USer - Check server logs`);
  }
}
