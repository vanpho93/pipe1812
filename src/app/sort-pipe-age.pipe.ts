import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './types';

@Pipe({
  name: 'sortPipeAge'
})
export class SortPipeAgePipe implements PipeTransform {

  transform(students: Student[]): Student[] {
    return students.sort((s1, s2) => s1.age - s2.age);
  }

}
