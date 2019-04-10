import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WCanDoComponent } from './wcando.component';

describe('WCanDoComponent', () => {
  let component: WCanDoComponent;
  let fixture: ComponentFixture<WCanDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WCanDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WCanDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
