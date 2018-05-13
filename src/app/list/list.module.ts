import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListBodyComponent } from './todo-list-body/todo-list-body.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ListComponent,
    TodoListHeaderComponent,
    TodoListBodyComponent
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
