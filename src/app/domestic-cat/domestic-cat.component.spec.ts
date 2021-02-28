import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticCatComponent } from './domestic-cat.component';

describe('DomesticCatComponent', () => {
  let component: DomesticCatComponent;
  let fixture: ComponentFixture<DomesticCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
