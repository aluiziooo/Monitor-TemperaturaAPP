import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCidadeComponent } from './add-cidade.component';

describe('AddCidadeComponent', () => {
  let component: AddCidadeComponent;
  let fixture: ComponentFixture<AddCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
