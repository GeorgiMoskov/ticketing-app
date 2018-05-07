import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTeamLeaderComponent } from './change-team-leader.component';

describe('ChangeTeamLeaderComponent', () => {
  let component: ChangeTeamLeaderComponent;
  let fixture: ComponentFixture<ChangeTeamLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTeamLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTeamLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
