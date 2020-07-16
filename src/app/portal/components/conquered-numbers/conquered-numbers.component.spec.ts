import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConqueredNumbersComponent } from './conquered-numbers.component';

describe('ConqueredNumbersComponent', () => {
  let component: ConqueredNumbersComponent;
  let fixture: ComponentFixture<ConqueredNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConqueredNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConqueredNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
