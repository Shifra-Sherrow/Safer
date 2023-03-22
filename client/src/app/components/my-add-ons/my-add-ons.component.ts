import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserAddOnService } from 'src/app/services/user-add-on';

@Component({
  selector: 'my-add-ons',
  templateUrl: './my-add-ons.component.html',
  styleUrls: ['./my-add-ons.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyAddOnsComponent implements OnInit, OnDestroy {
  
  addOns: any[] = [];

  subscription: Subscription;
  
  constructor(private userAddOnService: UserAddOnService) {
    this.subscription = this.userAddOnService.userAddOns
      .subscribe(addOns => addOns && (this.addOns = addOns));
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
