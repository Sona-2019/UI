import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttrialComponent } from './studenttrial.component';

describe('StudenttrialComponent', () => {
  let component: StudenttrialComponent;
  let fixture: ComponentFixture<StudenttrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenttrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenttrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
