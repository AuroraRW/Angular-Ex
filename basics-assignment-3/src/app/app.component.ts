import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show=false;
  result=[];
  onShowTotal(){
    this.show=!this.show;
    this.result.push(new Date());
  }
}
