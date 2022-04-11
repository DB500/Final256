import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool5Component } from './tool5.component';

describe('Tool5Component', () => {
  let component: Tool5Component;
  let fixture: ComponentFixture<Tool5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tool5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
