export interface StatsCardData {
  icon: string;
  label: string;
  value: number;
  color: string;
}

export interface ActivityCardData {
  icon: string;
  title: string;
  subtitle: string;
  time: string;
  color: string;
}

export interface SermonCardData {
  title: string;
  date: string;
  views: number;
}

export interface MosqueInfoData {
  name: string;
  capacity: number;
  openedSince: string;
  tag: string;
}