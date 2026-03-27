import { animate, style, transition, trigger } from '@angular/animations';

export let inOutAnimationFactory = (time: number): any[] => {
  return [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(`${time}s ease-in-out`, style({ opacity: 1 })),
      ]),
    ]),
  ];
};
