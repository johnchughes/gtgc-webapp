import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gtgc';

  data: Observable<any[]>;
  constructor(private userService: UserService) {
    console.log('test');
    this.data = userService.getUsers().valueChanges();
  }

}
