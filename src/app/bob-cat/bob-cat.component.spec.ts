import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobCatComponent } from './bob-cat.component';

describe('BobCatComponent', () => {
  let component: BobCatComponent;
  let fixture: ComponentFixture<BobCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
