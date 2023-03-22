import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  footer: any[];
  
  constructor(private configService: ConfigService) {
    this.footer = this.configService.find('footer');
  }

  ngOnInit(): void { }

}
