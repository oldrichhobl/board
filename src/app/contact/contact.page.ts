import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
 constructor( ) {

}

ngOnInit() {
    console.log(" ngOnInit na ContactPage.ts");
    //svgChessBoard.addEventListener('mouseup', (e) => {
}  
  
clickPole(id) {
     console.log("openLocalSpz");
     console.dir(id); 
     let idd = document.getElementById(id);
     console.dir(idd);
     // idd.style = "fill: silver;";
   }
}

