import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

public datum:any = "2019-11-25>>";
public today:any;

ngOnInit() {
   const now = new Date();
   console.log(now);
   console.log(now.toISOString());
   console.dir(now);
   this.today = now.toISOString();
   //this.today = now;
}

}
