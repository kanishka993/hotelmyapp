import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vfreeh1Component } from './vfreeh1.component';

describe('Vfreeh1Component', () => {
  let component: Vfreeh1Component;
  let fixture: ComponentFixture<Vfreeh1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vfreeh1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vfreeh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
