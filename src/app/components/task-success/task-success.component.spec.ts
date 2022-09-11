import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSuccessComponent } from './task-success.component';

describe('TaskSuccessComponent', () => {
  let component: TaskSuccessComponent;
  let fixture: ComponentFixture<TaskSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
