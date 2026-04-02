import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '@shared/services/user/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export default class HomePageComponent {
  private _userService = inject(UserService);
  constructor(private _router : Router){

  }
   get isUser(){
    return this._userService.isStudent;
  }


  goToPayment(){
    if(this.isUser){
     return
    }else
    {
      this._router.navigateByUrl('/external/login')
    }
  }
  navigateToLogin(){
     this._router.navigateByUrl('/external/login')
  }
  navigateToLevels(){
     this._router.navigateByUrl('/main/levels')
  }
}
