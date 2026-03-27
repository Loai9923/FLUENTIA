import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-main-page-wrapper',
  imports: [CommonModule, MatCardModule],
  templateUrl: './main-page-wrapper.component.html',
  styleUrl: './main-page-wrapper.component.scss',
})
export class MainPageWrapperComponent {}
