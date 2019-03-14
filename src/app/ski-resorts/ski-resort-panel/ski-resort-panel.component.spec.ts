import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiResortPanelComponent } from './ski-resort-panel.component';

describe('SkiResortPanelComponent', () => {
  let component: SkiResortPanelComponent;
  let fixture: ComponentFixture<SkiResortPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiResortPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiResortPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
