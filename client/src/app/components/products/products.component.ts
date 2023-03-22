import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products: any[];
  
  constructor(private configService: ConfigService) {
    this.products = this.configService.find('products');
  }

  ngOnInit(): void { }

}
