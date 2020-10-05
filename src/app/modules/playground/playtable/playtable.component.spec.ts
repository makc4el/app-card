import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaytableComponent } from './playtable.component';

describe('PlaytableComponent', () => {
  let component: PlaytableComponent;
  let fixture: ComponentFixture<PlaytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
