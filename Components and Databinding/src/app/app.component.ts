import { Component } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  onServerAdded(ServerData: {serverName: string, serverContent: string}) {
      this.serverElements.push({
      type: 'server',
      name: ServerData.serverName,
      content: ServerData.serverContent
    }); 
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
      this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  
}
