import { Component, inject } from '@angular/core';
import { Headtag } from "../../shared/headtag/headtag";
import { Subjects } from '../../services/subjects';
import { SubjectCard } from "../../shared/subject-card/subject-card";

@Component({
  selector: 'app-diploma',
  imports: [Headtag, SubjectCard],
  templateUrl: './diploma.html',
  styleUrl: './diploma.css',
})
export class Diploma {
_subjectService = inject(Subjects);
subjects: any[] = [];
  getSubjects() {
  this._subjectService.getSubjects().subscribe(
    (res:any) =>
       {
    this.subjects = res;
    console.log(this.subjects);
      });
}
ngOnInit(){
  this.getSubjects();
}
}
