import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-bangalore-users',
  templateUrl: './bangalore-users.component.html',
  styleUrls: ['./bangalore-users.component.css']
})
export class BangaloreUsersComponent implements OnInit {
  users:{id:number, name:string, location:string}[] = [];
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.users;
  }

}
