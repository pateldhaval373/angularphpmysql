import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './students/add/add.component';
import { ViewComponent } from './students/view/view.component';
import { EditComponent } from './students/edit/edit.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '' ,redirectTo: 'login',pathMatch: 'full'},
  {path: 'add' ,component: AddComponent },
  {path: 'view' ,component: ViewComponent },
  {path: 'edit/:id' ,component: EditComponent },
  {path: 'login' ,component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
