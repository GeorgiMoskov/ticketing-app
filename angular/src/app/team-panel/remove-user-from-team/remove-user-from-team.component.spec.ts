import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserFromTeamComponent } from './remove-user-from-team.component';

describe('RemoveUserFromTeamComponent', () => {
  let component: RemoveUserFromTeamComponent;
  let fixture: ComponentFixture<RemoveUserFromTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveUserFromTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveUserFromTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
