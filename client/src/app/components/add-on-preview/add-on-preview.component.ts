import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { UserAddOnService } from 'src/app/services/user-add-on';

@Component({
  selector: 'add-on-preview',
  templateUrl: './add-on-preview.component.html',
  styleUrls: ['./add-on-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddOnPreviewComponent implements OnInit {

  @Input() addOn: any;
  
  constructor(private userAddOnService: UserAddOnService) { }

  ngOnInit(): void { }

  removeAddOn(id: string): void {
    this.userAddOnService.delete(id)
      .subscribe(_ => this.userAddOnService.load());
  }

}
