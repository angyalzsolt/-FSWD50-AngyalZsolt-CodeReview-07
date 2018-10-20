import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'important-num',
  templateUrl: './important-num.component.html',
  styleUrls: ['./important-num.component.css']
})
export class ImportantNumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  interval = [0,1,2,3,4,5,6,7,8,9]

  randomColor(){
  	var code = Math.random();
			var b = String(code)
			var c = b.substring(3,9)
			var color  = "#" + c
			return color
  }


}
