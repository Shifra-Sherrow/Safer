import { Pipe, PipeTransform } from '@angular/core';

import { TranslateService } from 'src/app/services/translate.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) { }

  transform(key: string): string {
    return this.translateService.data[key] || key;
  }

}
