import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastActorsComponentComponent } from './last-actors-component.component';

describe('LastActorsComponentComponent', () => {
  let component: LastActorsComponentComponent;
  let fixture: ComponentFixture<LastActorsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastActorsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastActorsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
