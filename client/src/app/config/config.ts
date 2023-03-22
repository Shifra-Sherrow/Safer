import * as English from 'src/app/i18n/en.json';
import { textConfig } from './text-config';

export const config = {
  languages: {
    en: English
  },
  topPanel: [
    { value: textConfig.ADD_ON_STORE, icon: '', disabled: false, isPremium: false, url: 'add-on-store' },
    { value: textConfig.MY_ADD_ONS, icon: '', disabled: false, isPremium: false, url: 'my-add-ons' }
  ],
  products: [
    { title: textConfig.KIOSK_TABLETS_TITLE, details: textConfig.KIOSK_TABLETS_DETAILS, bgc: '#C8AED0' },
    { title: textConfig.SELF_SERVICE_PAYMENT_MACHINE_TITLE, details: textConfig.SELF_SERVICE_PAYMENT_MACHINE_DETAILS, bgc: '#78C2B3' },
    { title: textConfig.SELF_SERVICE_CABINET_TITLE, details: textConfig.SELF_SERVICE_CABINET_DETAILS, bgc: '#DA763D' }
  ],
  footer: [
    { txt: textConfig.FOOTER_TXT, icon: 'logoTxt' },
    { txt: textConfig.EMAIL, icon: '' },
    { txt: textConfig.PHONE, icon: '' },
    { txt: textConfig.ADDRESS, icon: '' },
    { txt: textConfig.COFFEERIGHT, icon: 'coffeeright' }
  ]
};
