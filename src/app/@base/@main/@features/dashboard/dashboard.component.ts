import { Component, signal } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { BaseComponent } from '@shared/components/base/base.component';
import { MainPageWrapperComponent } from '@shared/components/wrappers/main-page-wrapper/main-page-wrapper.component';
import {
  ActivityCardData,
  MosqueInfoData,
  SermonCardData,
  StatsCardData,
} from './interfaces/dashboard.interfaces';
import { MosqueCardComponent } from './mosque-card/mosque-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    CoreModule,
    MainPageWrapperComponent,
    ProfileCardComponent,
    MosqueCardComponent,
  ],
})
export default class DashboardComponent extends BaseComponent {
  currentUser = this._userService.currentUser;

  // Dashboard stats
  stats = signal<StatsCardData[]>([
    {
      icon: 'event',
      label: 'pages.dashboard.stats.totalSermons',
      value: 48,
      color: 'bg-orange-100',
    },
    {
      icon: 'people',
      label: 'pages.dashboard.stats.audienceReach',
      value: 2500,
      color: 'bg-blue-100',
    },
    {
      icon: 'feedback',
      label: 'pages.dashboard.stats.pendingFeedback',
      value: 12,
      color: 'bg-red-100',
    },
  ]);

  // Recent activities
  recentActivities = signal<ActivityCardData[]>([
    {
      icon: 'add',
      title: 'pages.dashboard.activities.newSermonAdded',
      subtitle: '3 pages.dashboard.activities.timeAgo.days',
      time: '',
      color: 'bg-blue-100',
    },
    {
      icon: 'feedback',
      title: 'pages.dashboard.activities.feedbackReceived',
      subtitle: '1 pages.dashboard.activities.timeAgo.hours',
      time: '',
      color: 'bg-green-100',
    },
    {
      icon: 'update',
      title: 'pages.dashboard.activities.profileUpdated',
      subtitle: '2 pages.dashboard.activities.timeAgo.days',
      time: '',
      color: 'bg-purple-100',
    },
  ]);

  // Recent sermons
  recentSermons = signal<SermonCardData[]>([
    {
      title: 'أهمية الصدق في حياة المسلم',
      date: 'الجمعة 8 يونيو 2025',
      views: 234,
    },
    {
      title: 'الرحمة في الإسلام',
      date: 'الجمعة 1 يونيو 2025',
      views: 189,
    },
    {
      title: 'الحياة الاجتماعية',
      date: 'الجمعة 25 مايو 2025',
      views: 156,
    },
  ]);

  // Mosque/Community info
  mosqueInfo = signal<MosqueInfoData>({
    name: 'جامع الرحمن - الدوحة',
    capacity: 800,
    openedSince: 'منذ يناير 2010',
    tag: 'خطبة الجمعة الأساسية',
  });

  constructor() {
    super();
  }

  viewProfile() {
    // Navigate to profile
    console.log('Navigate to profile');
  }
}
