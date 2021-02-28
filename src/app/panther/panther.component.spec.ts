import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantherComponent } from './panther.component';

describe('PantherComponent', () => {
  let component: PantherComponent;
  let fixture: ComponentFixture<PantherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
