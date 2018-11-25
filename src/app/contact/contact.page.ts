import { Component } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})

export class ContactPage {

public sliderrangex: number = 100;
public sliderrangey: number = 100;

 constructor(public events: Events,
             private storage: Storage
                ) {
    console.log("CONTRUCTOR ")
    events.subscribe('ionChange', (user) => {
    // user and time are the same arguments passed in `events.publish(user, time)`
    console.log('Welcome Events', user);
  });
}

ngOnInit() {
      // set a key/value
      //storage.set('name', 'Max');

  // Or to get a key/value pair
    this.storage.get('xcoor').then((val) => {
    console.log('Your xcoor is', val);
    if(val != null) this.sliderrangex = val;
    });
    this.storage.get('ycoor').then((val) => {
    console.log('Your ycoor is', val);
    if(val != null) this.sliderrangey = val;
    });

    console.log(" ngOnInit na ContactPage.ts");

    //svgChessBoard.addEventListener('mouseup', (e) => {
}  
 
ionChange(e)
{
  console.log("ionChange " );
  console.dir( e );
  this.storage.set('xcoor', this.sliderrangex.toString());
  this.storage.set('ycoor', this.sliderrangey.toString());

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

