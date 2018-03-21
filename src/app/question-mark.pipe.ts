import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionMark'
})

export class QuestionMarkPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return '?'.repeat(value);
  }

}
