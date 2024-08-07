import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocardComponent } from './promocard.component';

describe('PromocardComponent', () => {
  let component: PromocardComponent;
  let fixture: ComponentFixture<PromocardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromocardComponent]
    });
    fixture = TestBed.createComponent(PromocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
