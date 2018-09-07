import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberKeysComponent } from './number-keys.component';

describe('NumberKeysComponent', () => {
  let component: NumberKeysComponent;
  let fixture: ComponentFixture<NumberKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
