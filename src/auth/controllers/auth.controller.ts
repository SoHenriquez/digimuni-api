import { Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport'

import { AuthService} from '../services/auth.service';
import { User } from 'src/modules/social-api/users/entities/user.entity';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local')) //local Strategy 
    @Post('login')
    @HttpCode(200)
    login(@Req() req: Request) {
        //const user = req.user as User;
        return req.user;
    }
}
