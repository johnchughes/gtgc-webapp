import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlereportComponent } from './battlereport.component';

describe('BattlereportComponent', () => {
  let component: BattlereportComponent;
  let fixture: ComponentFixture<BattlereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattlereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
