import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool10Component } from './tool10.component';

describe('Tool10Component', () => {
  let component: Tool10Component;
  let fixture: ComponentFixture<Tool10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tool10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
