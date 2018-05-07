import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit, OnChanges {
  @Input() isAuthenticated;
  email = this.isAuthenticated;
  currentUser: any;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.currentUser = JSON.parse(localStorage.getItem('user'))
    if (this.currentUser) {
      this.email = this.currentUser.email
    } else {
      this.email = false;
    }
  }

  logout() {
    this.authService.logout().subscribe(
      data => console.log(data)
    );
  }

}