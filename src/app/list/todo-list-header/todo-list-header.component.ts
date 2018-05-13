import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {
  @Input() listData;
  @Input() itemState;

  @Output() addItem = new EventEmitter();

  itemValue;

  constructor() { }

  ngOnInit() {
  }

  sendAddItem() {
    this.addItem.emit(this.itemValue);
  }

}
