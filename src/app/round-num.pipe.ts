import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNum' })

export class RoundNumPipe implements PipeTransform {
    transform(value: number, type: number, addition: number): number {
        if (type > 0) return Math.ceil(value + addition);
        if (type < 0) return Math.floor(value + addition);
        return Math.round(value + addition);
    }
}
