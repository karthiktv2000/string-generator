import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
    public generateRandomString():string[]{
        const random=require('random-words')
        return random(10);
    }
}
