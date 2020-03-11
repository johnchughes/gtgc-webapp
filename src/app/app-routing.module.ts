import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BattlereportComponent } from './battlereport/battlereport.component';
import { BlogComponent } from './blog/blog.component';
import { NewblogpostComponent } from './blog/newblogpost/newblogpost.component';
import { ViewblogComponent } from './blog/viewblog/viewblog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'battle-reports', component: BattlereportComponent },
  { path: 'posts/new', component: NewblogpostComponent },
  { path: 'posts/:slug', component: ViewblogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
