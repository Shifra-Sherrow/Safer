import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { get, cloneDeep } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  find(configKey: string): any {
    return cloneDeep(get(config, configKey));
  }

}
