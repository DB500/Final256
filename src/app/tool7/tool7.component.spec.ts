import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool7Component } from './tool7.component';

describe('Tool7Component', () => {
  let component: Tool7Component;
  let fixture: ComponentFixture<Tool7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tool7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
