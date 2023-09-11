import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FormComponent } from './components/form/form.component';

const routes:Routes =[
  {
    component:AboutComponent,
    path :"about"
  },
  {
    component:HomeComponent,
    path:"home"
  },
  {
    component:ContactsComponent,
    path:"contact"
  },
  {
    component:FormComponent,
    path:"form"
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
