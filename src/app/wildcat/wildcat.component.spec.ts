import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcatComponent } from './wildcat.component';

describe('WildcatComponent', () => {
  let component: WildcatComponent;
  let fixture: ComponentFixture<WildcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
