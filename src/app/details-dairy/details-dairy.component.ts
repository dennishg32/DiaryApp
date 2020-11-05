import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-details-dairy',
  templateUrl: './details-dairy.component.html',
  styleUrls: ['./details-dairy.component.css']
})
export class DetailsDairyComponent implements OnInit {
  @Input() diary: Diary;
  @Output() isComplete = new EventEmitter<boolean>();

  deleteDiary(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
