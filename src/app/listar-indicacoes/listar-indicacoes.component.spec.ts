import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIndicacoesComponent } from './listar-indicacoes.component';

describe('ListarIndicacoesComponent', () => {
  let component: ListarIndicacoesComponent;
  let fixture: ComponentFixture<ListarIndicacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarIndicacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarIndicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
