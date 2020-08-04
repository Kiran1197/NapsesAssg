import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-web-page',
  templateUrl: './web-page.component.html',
  styleUrls: ['./web-page.component.css']
})
export class WebPageComponent implements OnInit {

  constructor(public dialog: MatDialog) {
   
   }

  ngOnInit(): void {
    this.popUp();
  }
  popUp(){
    this.dialog.open(PopUpComponent, {width: '500px',height: '450px'});
  }

}
