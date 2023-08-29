import { Controller,Get, Param } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
    constructor(private readonly data: DataService) {}
    
    @Get()
    total()
    {
        return this.data.total();
    }
    @Get(':id')
    getData(@Param('id') id: string)
    {
        return this.data.getData(id);
    }
}
