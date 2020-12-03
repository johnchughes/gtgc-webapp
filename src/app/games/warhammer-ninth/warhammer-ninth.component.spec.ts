import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarhammerNinthComponent } from './warhammer-ninth.component';

describe('WarhammerNinthComponent', () => {
  let component: WarhammerNinthComponent;
  let fixture: ComponentFixture<WarhammerNinthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarhammerNinthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarhammerNinthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
