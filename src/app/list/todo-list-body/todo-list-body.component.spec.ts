import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListBodyComponent } from './todo-list-body.component';

describe('TodoListBodyComponent', () => {
  let component: TodoListBodyComponent;
  let fixture: ComponentFixture<TodoListBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
