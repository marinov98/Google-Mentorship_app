import { Component} from '@angular/core';

@Component({
    selector: 'recycling',
    template: `
    <h2 class="goodTitle">{{ goodMaterials }}</h2> 
    <div class="row">
        <div class="col-sm-4">
          <ul>
            <li *ngFor="let materials of goodMaterialList">
                {{materials}}
            </li>
          </ul>
        </div>
        <div class="col-sm-6">
            <h2>Description</h2>
            <p>Something Something</p>
        </div>
      </div>
    <h2 class="badTitle">{{ badMaterials }}</h2>
    <div class="row"> 
      <div class="col-sm-4">
          <ul>
            <li *ngFor="let materials of badMaterialList">
                {{materials}}
            </li>
          </ul>
        </div>
        <div class="2 col-sm-6">
            <h2>Description</h2>
            <p>Something Something</p>
        </div>
    </div>
    `

              
})

export class RecyclingComponent { 

  goodMaterials = "List of good recycling materials";
  badMaterials = "List of bad recycling mateirals";
  goodMaterialList = ["Aluminum","Cardboard","Paper"];
  badMaterialList = ["Glass","Plastic"];
}
