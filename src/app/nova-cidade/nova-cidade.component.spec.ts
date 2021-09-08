import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaCidadeComponent } from './nova-cidade.component';

describe('NovaCidadeComponent', () => {
  let component: NovaCidadeComponent;
  let fixture: ComponentFixture<NovaCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaCidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
