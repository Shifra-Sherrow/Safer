import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AddOnService } from './services/add-on';
import { UserAddOnService } from './services/user-add-on';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private addOnService: AddOnService,
              private userAddOnService: UserAddOnService) { }

  ngOnInit(): void {
    this.addOnService.load();
    this.userAddOnService.load();
  }

}
