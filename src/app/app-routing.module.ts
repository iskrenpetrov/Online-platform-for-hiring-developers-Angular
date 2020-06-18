import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ContactsComponent  } from './contacts/contacts.component';
import { AccessapComponent } from './accessap/accessap.component';
import { Job1Component } from './job1/job1.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin-panel', component: AdminpanelComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'accessap', component: AccessapComponent },
  { path: 'job1', component: Job1Component },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
