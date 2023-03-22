import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { Tab } from 'src/app/models/tab';
import { ConfigService } from 'src/app/services/config.service';
import { UserAddOnService } from 'src/app/services/user-add-on';

@Component({
  selector: 'top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopPanelComponent implements OnInit, OnDestroy {
  
  tabs: Tab[] = [];
  selectedTab: Tab | null = null;

  subscription: Subscription;
  
  constructor(private configService: ConfigService,
              private userAddOnService: UserAddOnService,
              private location: Location,
              private route: ActivatedRoute,
              private router: Router) {
    const lastTabs = this.configService.find('topPanel');
        
    this.subscription = this.userAddOnService.userAddOns
      .subscribe(userAddOns => {
        const names = userAddOns.map(addOn => addOn.name);
        const firstTabs = names.map(value => ({ value, icon: '', disabled: false, isPremium: true, url: '' }));
        this.tabs = firstTabs.concat(lastTabs);
        
        const urlArr = location.path().split('/');
        const url = urlArr[urlArr.length - 1];
        this.selectedTab = url && this.tabs.find(t => t.url === url) as Tab || null;
      });
  }

  ngOnInit(): void { }

  selectTab(tab: Tab): void {
    this.selectedTab = tab;
    tab.url && this.router.navigate([tab.url], { relativeTo: this.route });
  }
  
  goHome(): void {
    this.selectedTab = null;
    this.router.navigate(['home'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
