import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetListaComponent } from './tweet-lista.component';

describe('TweetListaComponent', () => {
  let component: TweetListaComponent;
  let fixture: ComponentFixture<TweetListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
