import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entities/User';

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(User) private readonly repo: Repository<User>) {}

  findByLogin(login: string) {
    return this.repo.findOne({ where: { login }});
  }

  async create(user: Partial<User>) {
    const createdUser = this.repo.create(user);
    const savedUser = await this.repo.save(createdUser);

    if (!savedUser) throw new HttpException('Fail create user', HttpStatus.INTERNAL_SERVER_ERROR);

    return savedUser;
  }

  async updateRefreshTokenByLogin(login: string, hash: string | null) {
    const updateInfo = await this.repo.update({ login }, { hashRefreshToken: hash });

    if (updateInfo.affected === 0) {
      throw new HttpException('User not found or token not updated', HttpStatus.BAD_REQUEST);
    }

    return true;
  }
}
