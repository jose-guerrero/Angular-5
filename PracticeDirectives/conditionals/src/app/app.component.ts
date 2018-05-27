import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show: boolean = false;
  showing: boolean = false;

  public myStyle = {
    'color':'blue',
    'background-color':'yellow'
  };

  public showText = false;
  public switchOff(){
    this.showText = !this.showText;
  }
  public TextColor = 'GREEN';

  public ChangeTextColor(){

    switch (this.TextColor){
      case 'GREEN': {
        this.TextColor = 'BLUE';
        break;
      }
      case 'BLUE': {
        this.TextColor = 'RED';
        break;
      }
      case 'RED': {
        this.TextColor = 'GREEN';
        break;
      }
    }

    /*
    if (this.TextColor=='GREEN'){
      this.TextColor = 'BLUE';
    }
    else{
      if (this.TextColor=='BLUE')
        this.TextColor = 'RED';
      else
        this.TextColor = 'GREEN';
    }*/
  }
}
