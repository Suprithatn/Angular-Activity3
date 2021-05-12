import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-hyderabad-users',
  templateUrl: './hyderabad-users.component.html',
  styleUrls: ['./hyderabad-users.component.css']
})
export class HyderabadUsersComponent implements OnInit {
  users:{id:number, name:string, location:string}[] = [];
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.users;
  }

}
