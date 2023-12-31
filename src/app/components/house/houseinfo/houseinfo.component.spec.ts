import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseinfoComponent } from './houseinfo.component';

describe('HouseinfoComponent', () => {
  let component: HouseinfoComponent;
  let fixture: ComponentFixture<HouseinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
