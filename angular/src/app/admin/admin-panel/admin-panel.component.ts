import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  navLinks = [
    {
      path: 'add-user',
      label: 'Create New User'
  },
  {
    path: 'add-user',
    label: 'Smth Else with User'
  },
  ]

  constructor() { }

  ngOnInit() {
  }

}
