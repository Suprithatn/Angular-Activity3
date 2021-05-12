import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'activity3';
  users:{id:number, name:string, location:string}[] = [];

  constructor(private usersService: UsersService){}

  ngOnInit(){
    this.users = this.usersService.users;
  }

}
