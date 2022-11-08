import { Controller,Get,Post,Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
  export class CatsController{
    @Get()
    findAll(@Req() request:Request):string{
      return 'This action return cats'
    }

    @Post()
    Cats():string{
        return 'add the cats'
    }
  }