import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetDetalheComponent } from './tweet-detalhe.component';

describe('TweetDetalheComponent', () => {
  let component: TweetDetalheComponent;
  let fixture: ComponentFixture<TweetDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
