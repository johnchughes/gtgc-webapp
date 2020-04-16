import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/models/profile';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() name:string;

  profile: Profile = undefined;

  constructor(private profileService : ProfileService) { 
    

  }

  ngOnInit() {
    this.profileService.GetProfile(this.name).subscribe(response => {
      console.log(this.name);
      console.log(response);
      this.profile = response;
    });
  }
}
