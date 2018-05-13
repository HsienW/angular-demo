import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listData;
  itemState;

  constructor() {
  }

  ngOnInit() {
    this.listData = [
      {
        title: '事件1',
        time: '2018/05/13',
        state: true
      },
      {
        title: '事件2',
        time: '2018/05/13',
        state: false
      },
      {
        title: '事件3',
        time: '2018/05/13',
        state: true
      }
    ];

    this.itemState = {
      done: 0,
      unfinished: 0
    };

    this.getListState();
  }

  getListState() {
    this.itemState.done = 0;
    this.itemState.unfinished = 0;

    this.listData.forEach((item) => {
      if (item.state) {
        this.itemState.done++;
      } else {
        this.itemState.unfinished++;
      }
    });
  }

  addItem(item) {
    const newItem = {
      title: item,
      time: '2018/05/13',
      state: false
    };
    this.listData.push(newItem);
    this.getListState();
  }

  doneItem(title) {
    this.listData.forEach((item) => {
      if (item.title === title) {
        item.state = true;
      }
    });
    this.getListState();
  }

  deleteItem(title) {
    const index = this.listData.findIndex(item => item.title === title);
    this.listData.splice(index, 1);
    this.getListState();
  }

}
