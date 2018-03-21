import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionMarkPipe } from './question-mark.pipe';
import { RoundNumPipe } from './round-num.pipe';
import { StudentsComponent } from './students/students.component';
import { SortPipeAgePipe } from './sort-pipe-age.pipe';
import { SortStudentPipe } from './sort-student.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuestionMarkPipe,
    RoundNumPipe,
    StudentsComponent,
    SortPipeAgePipe,
    SortStudentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
