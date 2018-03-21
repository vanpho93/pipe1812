import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionMarkPipe } from './question-mark.pipe';
import { RoundNumPipe } from './round-num.pipe';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionMarkPipe,
    RoundNumPipe,
    StudentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
