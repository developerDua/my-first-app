import { Component } from '@angular/core';

@Component({
//  selector: 'app-servers',
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
    // template: `<p>hello servers works!</p>`,
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  serverId : number = 10;
  serverStatus : string = "Offline"
  enableBttn = false;
  nwServrStatus = "Nothing creatd";
  srvrDtail = "";

  constructor(){
    setTimeout(() => {
      this.enableBttn = true;
    }, 2000);
  }

  getServerStatus(){
    return this.serverStatus;
  }

  onBttnClick(){
    this.nwServrStatus = "Creatd";
  }

  ontxtboxEvnt(event : Event){
    this.srvrDtail = (<HTMLInputElement>event.target).value
  }
}
