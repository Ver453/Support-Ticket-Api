import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepo:Repository<User>){

    }

    async registerUser(RegisterUserDto:RegisterUserDto){
        const register = this.userRepo.create(RegisterUserDto)
        return await this.userRepo.save(register)
    }
}
