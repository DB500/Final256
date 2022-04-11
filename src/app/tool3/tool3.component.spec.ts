import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool3Component } from './tool3.component';

describe('Tool3Component', () => {
  let component: Tool3Component;
  let fixture: ComponentFixture<Tool3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tool3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
