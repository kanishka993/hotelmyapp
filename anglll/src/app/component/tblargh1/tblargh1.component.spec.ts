import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tblargh1Component } from './tblargh1.component';

describe('Tblargh1Component', () => {
  let component: Tblargh1Component;
  let fixture: ComponentFixture<Tblargh1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tblargh1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tblargh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
