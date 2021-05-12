import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users:{id:number, name:string, location:string}[] = [];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.users;
  }
}
