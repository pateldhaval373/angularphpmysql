import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    private apiService: ServicesService,
    private router: Router
) { }

addForm: FormGroup;
token: any;
ngOnInit() {
this.token =  window.localStorage.getItem('token');
console.log(this.token);
if(!this.token){
this.router.navigate(['login']);
}

this.addForm = this.formBuilder.group({
id: [],
username: ['', Validators.required],
password: ['', Validators.required],
firstName: ['', Validators.required],
lastName: ['', Validators.required],
age: ['', Validators.required],
salary: ['', Validators.required]
});

}

onSubmit() {
// more code will come here
console.log(this.addForm.value);

this.apiService.createUser(this.addForm.value)
.subscribe( data => {
this.router.navigate(['view']);
});
}

logOut(){
window.localStorage.removeItem('token');
this.router.navigate(['login']);
}

}
