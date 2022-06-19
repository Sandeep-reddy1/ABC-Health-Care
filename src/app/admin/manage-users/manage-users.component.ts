import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  Users:any;
  constructor(private userService:AuthService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
   
    this.userService.getUsers().subscribe(res=>{
      this.Users=res;
    })
  }

}
