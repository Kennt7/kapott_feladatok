import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GepardComponent } from './gepard.component';

describe('GepardComponent', () => {
  let component: GepardComponent;
  let fixture: ComponentFixture<GepardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GepardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GepardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
