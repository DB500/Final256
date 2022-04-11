import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool6Component } from './tool6.component';

describe('Tool6Component', () => {
  let component: Tool6Component;
  let fixture: ComponentFixture<Tool6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tool6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
