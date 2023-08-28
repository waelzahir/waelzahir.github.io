import { Controller,Get, Param } from '@nestjs/common';

@Controller('data')
export class DataController {
    @Get()
    total()
    {
        return 10;
    }
    @Get(':id')
    getPost(@Param('id') id: string)
    {
        return 'salam ' + id;
    }
}
