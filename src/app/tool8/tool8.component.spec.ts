import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool8Component } from './tool8.component';

describe('Tool8Component', () => {
  let component: Tool8Component;
  let fixture: ComponentFixture<Tool8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tool8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
