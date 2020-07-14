import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatwedoItemComponent } from './whatwedo-item.component';

describe('WhatwedoItemComponent', () => {
  let component: WhatwedoItemComponent;
  let fixture: ComponentFixture<WhatwedoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatwedoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatwedoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
