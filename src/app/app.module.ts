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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    BattlereportComponent,
    HomeComponent,
    BlogformComponent,
    NewblogpostComponent,
    ViewblogComponent
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
