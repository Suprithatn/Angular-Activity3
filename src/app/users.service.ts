import { Injectable } from "@angular/core";

@Injectable()
export class UsersService{
    users = [
        {id: 101, name: 'Rohan', location: 'Bangalore'},
        {id: 102, name: 'Revathi', location: 'Hyderabad'},
        {id: 103, name: 'Virat', location: 'Bangalore'},
        {id: 104, name: 'Mala', location: 'Hyderabad'},
        {id: 105, name: 'Max', location: 'Bangalore'}
    ];
}