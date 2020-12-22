import { Component } from '@angular/core';
import { CommonService } from '../provider/Common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HonestFoodFrontend';
  outlets = [];

  constructor(private commonService: CommonService) {}

  findOutlet(address): any {
    this.commonService.getOutlets(address).subscribe(res => {
      this.outlets = res.body;
    });
  }

}
