import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioproductoComponent } from './inicioproducto.component';

describe('InicioproductoComponent', () => {
  let component: InicioproductoComponent;
  let fixture: ComponentFixture<InicioproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
