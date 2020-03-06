import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isAuthenticated = false;
  @Input() gender = 'male';
  avatarSrc;
  menuClicked = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if(this.gender === 'male'){
      this.avatarSrc="assets/sign/avatar-male.png";
    }else{
      this.avatarSrc="assets/sign/avatar-female.png";
    }
  }

  logout() {
    this.authService.logout();
  }


}
