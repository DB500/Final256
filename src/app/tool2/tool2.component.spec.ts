import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool2Component } from './tool2.component';

describe('Tool2Component', () => {
  let component: Tool2Component;
  let fixture: ComponentFixture<Tool2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tool2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
