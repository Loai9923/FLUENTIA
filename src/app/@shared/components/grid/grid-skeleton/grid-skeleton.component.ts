import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { inOutAnimationFactory } from '@shared/animations/in-out.animation';
import { Pagination } from '@shared/enums';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-grid-skeleton',
  imports: [CommonModule, NgxSkeletonLoaderModule, TranslateModule],
  templateUrl: './grid-skeleton.component.html',
  styleUrl: './grid-skeleton.component.scss',
  animations: [inOutAnimationFactory(0.2)],
})
export class GridSkeletonComponent {
  isLoading = input<boolean>(false);

  @Input() set rows(number: number) {
    if (!number) return;
    this.loaderArr = new Array(number);
  }

  loaderArr = new Array(Pagination.TAKE);
}
