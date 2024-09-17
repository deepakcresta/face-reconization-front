import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayoutModuleComponent } from './base-layout-module.component';

describe('BaseLayoutModuleComponent', () => {
  let component: BaseLayoutModuleComponent;
  let fixture: ComponentFixture<BaseLayoutModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseLayoutModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseLayoutModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
