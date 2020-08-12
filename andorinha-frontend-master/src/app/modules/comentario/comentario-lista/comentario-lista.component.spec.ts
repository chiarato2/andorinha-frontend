import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioListaComponent } from './comentario-lista.component';

describe('ComentarioListaComponent', () => {
  let component: ComentarioListaComponent;
  let fixture: ComponentFixture<ComentarioListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
