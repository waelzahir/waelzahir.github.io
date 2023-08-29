import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DataService {
    constructor(private readonly prisma: PrismaService)
    {}
    total(){
        return 10;
    }
    getData(id: string)
    {
        return  'id =' + id;
    }
}
