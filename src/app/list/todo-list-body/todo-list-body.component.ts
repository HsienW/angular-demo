import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-list-body',
  templateUrl: './todo-list-body.component.html',
  styleUrls: ['./todo-list-body.component.css']
})
export class TodoListBodyComponent implements OnInit {
  @Input() listData;

  @Output() doneItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  sendDoneItem(title) {
    this.doneItem.emit(title);
  }

  sendDelete(title) {
    this.deleteItem.emit(title);
  }
}
