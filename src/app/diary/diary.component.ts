import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent implements OnInit {
  diaries: Diary[] = [
    new Diary(
      1,
      'Working on project',
      'Creating a diary using angular framework',
      new Date(2020, 11, 4)
    ),
    new Diary(
      2,
      'Exercises on Angular',
      'creation of flash cards',
      new Date(2020, 11, 4)
    ),
  ];

  newDiary(diary) {
    let diarylength = this.diaries.length;
    diary.id = diarylength + 1;
    diary.date = new Date(diary.date);
    this.diaries.push(diary);
  }

  // showForm: boolean;
  // toggleForm() {
  //   this.showForm = !this.showForm;
  // }

  deleteDiary(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure u want to delete this Diary: "${this.diaries[index].name}" ?`
      );

      if (toDelete) {
        this.diaries.splice(index, 1);
      }
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
