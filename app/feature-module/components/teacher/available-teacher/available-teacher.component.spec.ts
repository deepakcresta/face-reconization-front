import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTeacherComponent } from './available-teacher.component';

describe('AvailableTeacherComponent', () => {
  let component: AvailableTeacherComponent;
  let fixture: ComponentFixture<AvailableTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
