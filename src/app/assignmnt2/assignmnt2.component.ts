import { Component } from '@angular/core';

@Component({
  selector: 'app-assignmnt2',
  templateUrl: './assignmnt2.component.html',
  styleUrl: './assignmnt2.component.css'
})
export class Assignmnt2Component {
  usrname : string = 'UserName';
  onTxtChange = true;

  onBttnClick(event : Event){
    if(this.usrname == "" ||this.usrname == undefined ){
      this.onTxtChange = true;
    }else{
      this.onTxtChange = false;
    }
  }
  onTxtChangeFn(){
    if(this.usrname == "" ||this.usrname == undefined ){
      this.onTxtChange = true;
    }else{
      this.onTxtChange = false;
    }
  }
}
