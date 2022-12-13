import { Inject, Injectable, forwardRef } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/modules/social-api/users/users.service';
import { User } from './../../modules/social-api/users/entities/user.entity';
import { PayloadToken } from './../models/token.model';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, password: string) {

        const user = await this.usersService.findByEmail(email);
        
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const token = await this.generateJWT(user);
                const rta = user.toJSON();
                const { password, ...rt } = rta; //Sacar password
                return {
                    rt,
                    token,
                };
            }

        }
        return null;
    }

    generateJWT(user: User) {
        const payload: PayloadToken = { role: user.role, sub: user._id };
        return  this.jwtService.sign(payload);
    }
}
