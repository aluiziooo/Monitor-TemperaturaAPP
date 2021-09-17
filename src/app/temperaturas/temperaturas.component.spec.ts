import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturasComponent } from './temperaturas.component';

describe('TemperaturasComponent', () => {
  let component: TemperaturasComponent;
  let fixture: ComponentFixture<TemperaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
