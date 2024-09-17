import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableClassroomComponent } from './available-classroom.component';

describe('AvailableClassroomComponent', () => {
  let component: AvailableClassroomComponent;
  let fixture: ComponentFixture<AvailableClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableClassroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
