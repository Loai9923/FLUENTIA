import { AppUserType } from "@shared/enums/user/app-user-type.enum";

export interface AppUser {
  id: number;
  email: string;
  username: string;
  name: string;
  userRole: AppUserType;
  role: string;
  phoneNumber?: string;
  profilePicture?: string;
  preachingCard?: {
    numberOfMosques: number;
    numberOfSermons: number;
    numberOfListeners: number;
    tags: string;
  };
}
