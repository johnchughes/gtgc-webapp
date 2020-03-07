import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewblogpostComponent } from './newblogpost.component';

describe('NewblogpostComponent', () => {
  let component: NewblogpostComponent;
  let fixture: ComponentFixture<NewblogpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewblogpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewblogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
