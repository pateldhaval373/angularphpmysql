import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import {Router} from '@angular/router';
import { ApiResponse } from '../../Model/api-response';
import {User} from '../../Model/user';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  users: any;
  token: any;
  constructor( private apiService: ServicesService,
               private router : Router 
              ) { }

  ngOnInit(): void {
    this.apiService.getUsers()
    .subscribe( (data : any) => {
        this.users = data;
        console.log(this.users);
    });

    this.token =  window.localStorage.getItem('token');
    //console.log(this.token);
    if(!this.token){
    this.router.navigate(['login']);
    }
  }

  deleteuser(user :User) {
    this.apiService.deleteUser(user.id)
    .subscribe(data =>{
      this.users=this.users.filter(u => u !== user);
    })
  }

  
  edit(user :User) {
    this.router.navigate(['edit/'+ user.id])
  }

  logOut(){
    window.localStorage.removeItem('token');
    this.router.navigate(['login']);
    }
}
