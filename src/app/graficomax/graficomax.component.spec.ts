import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficomaxComponent } from './graficomax.component';

describe('GraficomaxComponent', () => {
  let component: GraficomaxComponent;
  let fixture: ComponentFixture<GraficomaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficomaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficomaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
