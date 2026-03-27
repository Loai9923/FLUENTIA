import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

export function queryParamValidityResolver(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): boolean | UrlTree {
  const router = inject(Router);
  const requiredParams: string[] = route.data['requiredQueryParams'] || [];
  const redirectTo = route.data['redirectTo'] || 'external/login';

  const missing = requiredParams.some(
    (param) => !route.queryParamMap.get(param),
  );
  if (missing) {
    router.navigateByUrl(redirectTo);
    return false;
  }
  return true;
}
