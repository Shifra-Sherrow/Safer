import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { AddOnService } from 'src/app/services/add-on';
import { UserAddOnService } from 'src/app/services/user-add-on';

@Component({
  selector: 'add-on-store',
  templateUrl: './add-on-store.component.html',
  styleUrls: ['./add-on-store.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddOnStoreComponent implements OnInit, OnDestroy {

  addOns: any[] = [];

  subscription: Subscription;
  
  constructor(private addOnService: AddOnService,
              private userAddOnService: UserAddOnService) {
    this.subscription = this.userAddOnService.userAddOns
      .subscribe(userAddOns => {
        const ids = userAddOns.map(addOn => addOn.addOnId);

        this.addOns = this.addOnService.allAddOns;
        this.addOns.forEach(addOn => addOn.disabled = ids.includes(addOn.id));
      });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
