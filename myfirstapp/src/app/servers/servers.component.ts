import { Component, OnInit } from '@angular/core';

import { ServerComponent } from '../Server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {
  status='Please Enter Your Name';
  username='';
  enterbutton=false;
  welcome='';
  
  constructor() { 
   /**setTimeout(()=>{
      this.enterbutton=true;
    },1000);*/

  }



  ngOnInit() {
  }
onEnterSite(){
    this.welcome='Hello';
    this.status= ', This Page is Under Construction!';

}
onUserNameUpdate(event: Event ){
  if (this.username==='') {
    this.enterbutton=false;
    this.welcome='';
    this.status='Please Enter Your Name';
  }
else{
  this.enterbutton=true;
  this.status=", Click on Enter Site";
  this.username=(<HTMLInputElement>event.target).value;
  return(this.username);
}

}
getColor(){
  return(this.username===''?'green':'red');
  
}
