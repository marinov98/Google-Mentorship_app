import { AppComponent } from './../app.component';
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
            <h2>Explaination</h2>
            <p>
            It takes one ton of sodas(aluminum) to save three tons of carbon dioxide.
             If you were trying to do the same thing with glass, 
             it would require 9 tons.Reusing cardboard and paper is very beneficial 
            because it is a lot more expensive to manufacture them.
            </p>
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
            <h2>Explaination</h2>
             <p>Recycling glass and plastic is not very effective.
               This is because you end up wasting a lot of water to 
               clean out your recyclables. Research shows that 
               the time, labor, and machinery needed to prepare 
               plastic and glass for recycling could double 
               the value of resources required for putting them into a landfill.
              </p>
        </div>
    </div>
    `

              
})

export class RecyclingComponent extends AppComponent { 

  goodMaterials = "List of good recycling materials";
  badMaterials = "List of bad recycling mateirals";
  goodMaterialList = ["Aluminum","Cardboard","Paper"];
  badMaterialList = ["Glass","Plastic"];
}
