import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessapComponent } from './accessap.component';

describe('AccessapComponent', () => {
  let component: AccessapComponent;
  let fixture: ComponentFixture<AccessapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
