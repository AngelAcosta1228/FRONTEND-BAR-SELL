import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtncollideComponent } from './btncollide.component';

describe('BtncollideComponent', () => {
  let component: BtncollideComponent;
  let fixture: ComponentFixture<BtncollideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtncollideComponent]
    });
    fixture = TestBed.createComponent(BtncollideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
