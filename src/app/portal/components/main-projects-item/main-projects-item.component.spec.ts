import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProjectsItemComponent } from './main-projects-item.component';

describe('MainProjectsItemComponent', () => {
  let component: MainProjectsItemComponent;
  let fixture: ComponentFixture<MainProjectsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProjectsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProjectsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
