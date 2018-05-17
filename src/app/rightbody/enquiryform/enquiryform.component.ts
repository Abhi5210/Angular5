import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../enquiry.service';

@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.css']
})
export class EnquiryformComponent implements OnInit {

  name: string;
  email : string;
  message : string;
  errors:boolean = false;
  errorlist:string[];
  sending:boolean = false;
  filename:string;

  constructor(private es: EnquiryService) { }

  ngOnInit() {
  }
  sendEnquiry():void{

    this.errorlist=[];
    this.errors = false;
    if(!this.name){
      this.errorlist.push("name should be filled");
    }

    if(!this.email){
      this.errorlist.push("email is required");
    }

    if(!this.message){
      this.errorlist.push("Message should be filled");
    }
    if(this.errorlist.length>0){
      this.errors = true;
    } else {
      this.sending = true;
      this.filename ="loading.gif";

      let obj = {
        name : this.name,
        message : this.message,
        email : this.email
      }
      this.es.sendEnquiry(obj).subscribe(
        () =>{
        this.filename="msgsent.png";
      setTimeout(() => {
        this.sending = false;
        this.email = "";
        this.name= "";
        this.message= "";
      }, 2000);  
      },
        () =>{
          alert("enquiry not sent");
          this.sending = false;
          this.email = "";
          this.name= "";
          this.message= "";  
        }
      )
    }
  }

}
