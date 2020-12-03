import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { NewblogpostComponent } from './blog/newblogpost/newblogpost.component';
import { ViewblogComponent } from './blog/viewblog/viewblog.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { PodcastComponent } from './podcast/podcast.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { EditblogComponent } from './blog/editblog/editblog.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { PostGuard } from './routeGuards/postGuard';
import { DataprivacyComponent } from './dataprivacy/dataprivacy.component';
import { GamesComponent } from './games/games.component';
import { WarhammerNinthComponent } from './games/warhammer-ninth/warhammer-ninth.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'posts', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'podcast', component: PodcastComponent},
  { path: 'leagues', component: LeaguesComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'posts/new', component: NewblogpostComponent, canActivate: [PostGuard] },
  { path: 'posts/:slug', component: ViewblogComponent },
  { path: 'posts/:docref/edit', component: EditblogComponent, canActivate: [PostGuard]},
  { path: 'register', component: UserRegisterComponent },
  { path: 'privacy', component: DataprivacyComponent},
  { path: 'games', component: GamesComponent },
  { path: 'games/40k-9th/:docref', component: WarhammerNinthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
