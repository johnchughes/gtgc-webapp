import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BattlereportComponent } from './battlereport/battlereport.component';
import { HomeComponent } from './home/home.component';
import { BlogformComponent } from './blog/blogform/blogform.component';
import { NewblogpostComponent } from './blog/newblogpost/newblogpost.component';
import { ViewblogComponent } from './blog/viewblog/viewblog.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { PodcastComponent } from './podcast/podcast.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { NavComponent } from './container/nav/nav.component';
import { FooterComponent } from './container/footer/footer.component';
import { EditblogComponent } from './blog/editblog/editblog.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    BattlereportComponent,
    HomeComponent,
    BlogformComponent,
    NewblogpostComponent,
    ViewblogComponent,
    LeaguesComponent,
    PodcastComponent,
    UserLoginComponent,
    NavComponent,
    FooterComponent,
    EditblogComponent,
    UserRegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
