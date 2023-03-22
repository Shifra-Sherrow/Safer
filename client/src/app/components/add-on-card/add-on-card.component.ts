import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { UserAddOnService } from 'src/app/services/user-add-on';

@Component({
  selector: 'add-on-card',
  templateUrl: './add-on-card.component.html',
  styleUrls: ['./add-on-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddOnCardComponent implements OnInit {

  @Input() addOn: any;
  
  constructor(private userAddOnService: UserAddOnService) { }

  ngOnInit(): void { }

  buyAddOn(id: string): void {
    this.userAddOnService.create(id)
      .subscribe(_ => this.userAddOnService.load());
  }

}
