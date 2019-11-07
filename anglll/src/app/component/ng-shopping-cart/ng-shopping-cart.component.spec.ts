import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgShoppingCartComponent } from './ng-shopping-cart.component';

describe('NgShoppingCartComponent', () => {
  let component: NgShoppingCartComponent;
  let fixture: ComponentFixture<NgShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
