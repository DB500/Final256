import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool4Component } from './tool4.component';

describe('Tool4Component', () => {
  let component: Tool4Component;
  let fixture: ComponentFixture<Tool4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tool4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
