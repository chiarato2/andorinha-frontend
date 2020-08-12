import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioDetalheComponent } from './comentario-detalhe.component';

describe('ComentarioDetalheComponent', () => {
  let component: ComentarioDetalheComponent;
  let fixture: ComponentFixture<ComentarioDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
