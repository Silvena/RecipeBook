import { Component,  NgModule  } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css'],
  providers: [NgbCarouselConfig]
  /*
  styles: [`
  /deep/ .carousel-item.active {
     border: solid 0.3em;
     border-color: red;
  }
`]*/
})
export class WellcomeComponent  {

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
   }

}
