import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  user: any;
  imagesrc:any;
  constructor(private http: HttpClient) {
    this.http.get('https://randomuser.me/api').subscribe((res: any) => {
      this.user = res.results[0];
      this.imagesrc=this.user?.picture?.large;
      console.log(this.user);
    })
  }
}
