import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'recycling',
    templateUrl:'./recycling.component.html',
    styleUrls: ['./recycling.component.css']
})

export class RecyclingComponent implements OnInit { 

  goodMaterials = "List of good recycling materials";
  badMaterials = "List of bad recycling mateirals";
  goodMaterialList = ["Aluminum","Cardboard","Paper"];
  badMaterialList = ["Glass","Plastic"];

  ngOnInit() {

  }
}
