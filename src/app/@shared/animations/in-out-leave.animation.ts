import { animate, style, transition, trigger } from '@angular/animations';

export let inOutLeaveAnimationFactory = (time: number): any[] => {
  return [
    trigger('inOutLeaveAnimation', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate(`${time}s ease-in-out`, style({ opacity: 0 })),
      ]),
    ]),
  ];
};
