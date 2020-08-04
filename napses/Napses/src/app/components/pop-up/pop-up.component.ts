import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { GetQuestionsService } from "../../services/get-questions.service";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  newData=0;
  value=" ";
  getQuestions=0;
  otherQuestions=0;
  questions=[];
  resOne=" ";
  resTwo;
  resThree;
  textValues=[];
  ngOnInit(): void {
  }

  constructor(public dialogRef: MatDialogRef<PopUpComponent>,private getService:GetQuestionsService) {
    
  }
  onItemChange(){
    if(this.newData==0 && this.value!="Dont care"){
      this.newData=1;
      this.value=null;
      console.log(this.newData );
    }
    else if(this.value=="Dont care"){
      this.otherQuestions=1;
    }
    else{
      this.getQuestions=1;
       this.getService.get().subscribe(res=>{
         this.questions=res;
         console.log(this.questions);
       });
    }
  }
  AddToTextArea1(val){
    this.resOne=val;
  }
  AddToTextArea2(val){
    this.resTwo=val;

  }
  AddToTextArea3(val){
    this.resThree=val;
  }
 onSubmit(){
  this.textValues=[this.resOne,this.resTwo,this.resThree];
  this.getService.save(this.textValues).subscribe(result=>{
      console.log(result)
  });
  this.dialogRef.close()
 }

  
}
