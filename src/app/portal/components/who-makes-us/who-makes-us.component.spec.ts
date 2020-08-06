import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoMakesUsComponent } from './who-makes-us.component';

describe('WhoMakesUsComponent', () => {
  let component: WhoMakesUsComponent;
  let fixture: ComponentFixture<WhoMakesUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoMakesUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoMakesUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
