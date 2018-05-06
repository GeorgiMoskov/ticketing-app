import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsMainComponent } from './teams-main.component';

describe('TeamsMainComponent', () => {
  let component: TeamsMainComponent;
  let fixture: ComponentFixture<TeamsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
