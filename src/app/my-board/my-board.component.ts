import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-board',
  templateUrl: './my-board.component.html',
  styleUrls: ['./my-board.component.scss']
})
export class MyBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	 console.log(" ngOnInit na my-board.component.ts");
  }

clickPole(id) {
     console.log("clickPole my-board");
     console.dir(id); 
     let idd = document.getElementById(id);
     console.dir(idd);
     idd.style = "fill: silver;";
   }
}
}
