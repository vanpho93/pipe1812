import { Component, OnInit } from '@angular/core';
import { Student } from '../types';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students : Student[] = [
    { _id: 'abcd1', name: 'Teo', age: 10, height: 150 },
    { _id: 'abcd2', name: 'Ti', age: 13, height: 110 },
    { _id: 'abcd3', name: 'Tun', age: 12, height: 120 },
    { _id: 'abcd4', name: 'Tuan', age: 14, height: 180 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
