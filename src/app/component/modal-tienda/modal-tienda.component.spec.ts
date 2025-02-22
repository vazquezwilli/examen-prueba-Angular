import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTiendaComponent } from './modal-tienda.component';

describe('ModalTiendaComponent', () => {
  let component: ModalTiendaComponent;
  let fixture: ComponentFixture<ModalTiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalTiendaComponent]
    });
    fixture = TestBed.createComponent(ModalTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
