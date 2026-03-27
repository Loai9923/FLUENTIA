import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  input,
  OnDestroy,
  output,
  signal,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import {
  RealsoftButton,
  RealsoftIconButton,
} from 'realsoft-reusable-components/button';
import {
  RealsoftFormField,
  RealsoftInput,
  RealsoftMenu,
  RealsoftMenuTrigger,
  RealsoftPrefix,
} from 'realsoft-reusable-components/features';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-filter',
  imports: [
    CommonModule,
    RealsoftFormField,
    RealsoftMenu,
    RealsoftMenuTrigger,
    RealsoftIconButton,
    RealsoftButton,
    RealsoftInput,
    RealsoftPrefix,
    MatTooltip,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements AfterViewInit, OnDestroy {
  destroy$ = new Subject<boolean>();

  search = new FormControl<string>('');
  activeFilter = false;

  onlySearch = input<boolean>(false);

  form = input<FormGroup>();
  yPosition = input<'above' | 'below'>('below');
  xPosition = input<'before' | 'after'>('before');

  searchChange = output<string>();
  apply = output<boolean>();
  clear = output<boolean>();

  hasTitle = signal(true);

  get searchControl() {
    return (this.form()?.get('search') as FormControl) || null;
  }

  ngAfterViewInit(): void {
    this.form()?.addControl('search', new FormControl(''));
    this.searchControl?.valueChanges
      .pipe(
        debounceTime(500), // Wait 500ms between changes
        distinctUntilChanged(), // Only trigger on actual changes
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: () => {
          this.onSearchChange();
        },
      });
  }

  applyFilter() {
    this.activeFilter = true;
    this.apply.emit(true);
  }

  clearFilter() {
    this.activeFilter = false;
    this.form()?.reset(null, { emitEvent: false });
    this.clear.emit(true);
  }

  onSearchChange() {
    this.searchChange.emit(this.searchControl?.value);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
