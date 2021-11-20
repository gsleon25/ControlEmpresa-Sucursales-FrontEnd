import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciosucursalComponent } from './iniciosucursal.component';

describe('IniciosucursalComponent', () => {
  let component: IniciosucursalComponent;
  let fixture: ComponentFixture<IniciosucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciosucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciosucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
