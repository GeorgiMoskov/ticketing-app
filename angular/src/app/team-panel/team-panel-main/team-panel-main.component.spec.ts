import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPanelMainComponent } from './team-panel-main.component';

describe('TeamPanelMainComponent', () => {
  let component: TeamPanelMainComponent;
  let fixture: ComponentFixture<TeamPanelMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPanelMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPanelMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
