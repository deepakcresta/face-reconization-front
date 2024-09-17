import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout-module',
  templateUrl: './base-layout-module.component.html',
  styleUrls: ['./base-layout-module.component.scss']
})
export class BaseLayoutModuleComponent implements OnInit {

  sidebarActive =true
  constructor() { }

  ngOnInit(): void {
  }

}
