import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './types';

@Pipe({
  name: 'sortStudent'
})
export class SortStudentPipe implements PipeTransform {
  transform(students: Student[], propName: keyof Student): Student[] {
    return students.sort((s1, s2) => {
      if (typeof s1[propName] === 'string') {
        return (s1[propName] as string).localeCompare(s2[propName] as string);
      }
      return +s1[propName] - +s2[propName];
    });
  }
}
