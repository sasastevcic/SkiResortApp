import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiPassComponent } from './ski-pass.component';

describe('SkiPassComponent', () => {
  let component: SkiPassComponent;
  let fixture: ComponentFixture<SkiPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
