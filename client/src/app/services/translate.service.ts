import { Injectable } from '@angular/core';

import { config } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  languages: any;
  data: any;

  constructor() {
    this.languages = config.languages;
  }

  use(language: string): void {
    this.data = this.languages[language];
  }

}
