import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"home"},
  {
    path:"home",component:HomeComponent
  },
  {
    path:"welcome",
   component:WelcomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"skills",
    component:SkillsComponent
  },
  {
    path:"contact",
    component:ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: "enabled",
    onSameUrlNavigation: "reload"

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
