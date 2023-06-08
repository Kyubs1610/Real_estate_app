import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantinfoComponent } from './tenantinfo.component';

describe('TenantinfoComponent', () => {
  let component: TenantinfoComponent;
  let fixture: ComponentFixture<TenantinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
