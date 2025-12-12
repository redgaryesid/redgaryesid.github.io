import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoFooter } from './proyecto-footer';

describe('ProyectoFooter', () => {
  let component: ProyectoFooter;
  let fixture: ComponentFixture<ProyectoFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
