import { CanDeactivateFn } from '@angular/router';
import { CanDeactivateComponent } from '@shared/interfaces';

export const canDeactivateComponentGuard: CanDeactivateFn<
  CanDeactivateComponent
> = (component) => {
  return component.canDeactivate;
};
