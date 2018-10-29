import { Component } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})

export class ContactPage {

public sliderrangex: number = 100;
public sliderrangey: number = 100;

 constructor(public events: Events ) {
    console.log("CONTRUCTOR ")
    events.subscribe('ionChange', (user) => {
    // user and time are the same arguments passed in `events.publish(user, time)`
    console.log('Welcome Events', user);
  });
}

ngOnInit() {
    console.log(" ngOnInit na ContactPage.ts");
    //svgChessBoard.addEventListener('mouseup', (e) => {
}  
 
ionChange(e)
{
  console.log("ionChange " );
  console.dir(e );
  let idd = document.getElementById("c1");
  // console.log(idd.getAttribute('cy'));
  // posun o padesat : idd.setAttribute('cy', 50 + Number(idd.getAttribute('cy'));
  idd.setAttribute('cx', this.sliderrangex.toString());
  idd.setAttribute('cy', this.sliderrangey.toString());

}  
clickPole(id) {
     console.log("clickPole " + this.sliderrangey);
     console.dir(id); 
     let idd = document.getElementById("c1");
     console.log(this.sliderrangey.toString());
    // posun o padesat : idd.setAttribute('cy', 50 + Number(idd.getAttribute('cy'));
    this.sliderrangey+=50;
    idd.setAttribute('cy', this.sliderrangey.toString());
     // idd.cy = 300;
     // idd.style = "fill: silver;";
   }
}

