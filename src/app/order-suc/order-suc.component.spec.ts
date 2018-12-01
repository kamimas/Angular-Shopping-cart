import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSucComponent } from './order-suc.component';

describe('OrderSucComponent', () => {
  let component: OrderSucComponent;
  let fixture: ComponentFixture<OrderSucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
