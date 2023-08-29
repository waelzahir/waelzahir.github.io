import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
    total(){
        return 10;
    }
    getData(id: string)
    {
        return  'id =' + id;
    }
}
