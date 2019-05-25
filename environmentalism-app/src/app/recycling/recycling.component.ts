import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'recycling',
    templateUrl:'./recycling.component.html',
    styleUrls: ['./recycling.component.css']
})

export class RecyclingComponent implements OnInit { 

  goodMaterials:string = "Good recycling materials";
  badMaterials:string = "Bad recycling materials";
  goodMaterialList:string[] = ["Aluminum","Cardboard","Paper"];
  badMaterialList:string[] = ["Glass","Plastic"];

  description1:boolean = false;
  description2:boolean = false;

  toggleDescription(desctype: number):void {
      if (desctype === 1)
        this.description1 = !this.description1
      else if (desctype === 2)
        this.description2 = !this.description2
      else {
        this.description1 = false;
        this.description2 = false;
      }
  }

  ngOnInit() {

  }
}
