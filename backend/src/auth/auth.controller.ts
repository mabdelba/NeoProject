import {
    Controller,
    Post,
    Body,
    ForbiddenException
  } from '@nestjs/common';
  import { PrismaService } from 'src/prisma/prisma.service';
  import * as argon from 'argon2';
  import { JwtService } from '@nestjs/jwt';
  import { ConfigService } from '@nestjs/config';
  import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
  
  
  @Controller('auth')
  export class AuthController {
    constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService,) {}
  
    @Post('register')
    async register(@Body() dto: {email: string, password: string, firstName: string, lastName: string}) {
       try {
        const hash = await argon.hash(dto.password);
        const user = await this.prisma.user.create({
          data: {
            email: dto.email,
            firstName: dto.firstName,
            lastName: dto.lastName,
            password: hash,
          },
        });
        return {
          token: await this.jwt.signAsync({ email: dto.email, sub: user.id }, { expiresIn: '1d', secret: this.config.get('JWT_SECRET') }),
        };
      } catch (e) {
        if (e instanceof PrismaClientKnownRequestError)
          if (e.code === 'P2002') {
            throw new ForbiddenException('User already exists');
          }
        throw e;
      };
    }
    @Post('login')
    async login(@Body() dto: {email: string, password: string}) {
       const user = await this.prisma.user.findUnique({
        where: { email: dto.email},
      });
      if (!user) throw new ForbiddenException('User not found');
      const isPasswordValid = await argon.verify(user.password, dto.password);
      if (!isPasswordValid) throw new ForbiddenException('Wrong password');
      return {
        token: await this.jwt.signAsync({ email: user.email, sub: user.id }, { expiresIn: '1d', secret: this.config.get('JWT_SECRET') }),
      };
    }
}