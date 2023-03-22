import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AddOnStoreComponent } from './components/add-on-store/add-on-store.component';
import { MyAddOnsComponent } from './components/my-add-ons/my-add-ons.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-on-store', component: AddOnStoreComponent },
  { path: 'my-add-ons', component: MyAddOnsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
