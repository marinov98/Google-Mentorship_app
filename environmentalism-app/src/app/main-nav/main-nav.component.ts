import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  options:string[] = ["Recycling","What You Can Do","Why Care?","Global Warming"];

  songAuthor:string ="-Joe Strummer & The Mescaleros' Song \"Johnny Appleseed\"" 

  constructor() { }

  ngOnInit() {
  }

}
