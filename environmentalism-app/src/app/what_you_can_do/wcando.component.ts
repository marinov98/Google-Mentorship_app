import { AppComponent } from './../app.component';
import { Component} from '@angular/core';

@Component({
    selector: 'wcando',
    template: `
    <h2 class="goodTitle">{{title}}</h2> 
    <div class="row">
      <div class="col-sm-4">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/EFd18edKElY" 
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>
    </div>
    <div class="row"> 
      <div class="col-sm-4">                     
        {{text}}                      
      </div>
    </div>
    `

              
})

export class WCanDoComponent extends AppComponent { 
  title = "99 is Not 100";
  text = `Individual effort matters; while it may not seem like much in the grand scheme
   of the world's environment, if everyone is able to give it their 100, there's sure to be change!`;
}
