import { trigger, transition, animate, style } from '@angular/animations';

export const fadeInOutTrigger = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(400, style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate(400, style({ opacity: 0 }))
  ])
]);
