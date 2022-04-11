import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool9Component } from './tool9.component';

describe('Tool9Component', () => {
  let component: Tool9Component;
  let fixture: ComponentFixture<Tool9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tool9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
