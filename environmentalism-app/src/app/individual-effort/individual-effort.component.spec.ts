import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualEffortComponent } from './individual-effort.component';

describe('IndividualEffortComponent', () => {
  let component: IndividualEffortComponent;
  let fixture: ComponentFixture<IndividualEffortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualEffortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEffortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
