import { Provider } from '@angular/core';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import {
  provideNativeDateAdapter,
  RealsoftPaginatorIntl,
} from 'realsoft-reusable-components/features';
import { EnglishArabicPaginatorIntl } from '../translation/paginator-intl';

export const materialProviders: Provider[] = [
  {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'outline',
      subscriptSizing: 'fixed',
    } as MatFormFieldDefaultOptions,
  },
  {
    provide: RealsoftPaginatorIntl,
    useClass: EnglishArabicPaginatorIntl,
  },
  provideNativeDateAdapter({
    parse: { dateInput: 'DD/MM/YYYY', timeInput: 'HH:mm' },
    display: {
      dateInput: 'DD/MM/YYYY',
      monthLabel: 'MMM',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'DD/MM/YYYY',
      monthYearA11yLabel: 'MMMM YYYY',
      timeInput: 'HH:mm',
      timeOptionLabel: 'HH:mm',
    },
  }),
];
