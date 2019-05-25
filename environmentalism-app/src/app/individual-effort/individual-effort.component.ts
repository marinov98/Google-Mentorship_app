import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'individual-effort',
  templateUrl: './individual-effort.component.html',
  styleUrls: ['./individual-effort.component.css']
})
export class IndividualEffortComponent implements OnInit {

  title = "99 is Not 100";
  text = `Individual effort matters; while it may not seem like much in the grand scheme
   of the world's environment, if everyone is able to give it their 100, there's sure to be change! 
   Watch this video to see how much difference individual effort truly makes!`;
   
  constructor() { }

  ngOnInit() {
  }

}

