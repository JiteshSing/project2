import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { MedicationService } from '../service/medication.service';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.css']
})
export class MedicationListComponent implements OnInit {

 
   // server response message
   message = "";

   // server error
   success: boolean = true;
  
   // Contains College list
   list: any = []
  
   // search form
   form = {
     "fullName":"",
    //  "category":"",
     "mid":0,
     "prescriptionDate":"",
     "dosage":"",
     "pageNo":1,
     "index":1,
     "MaxId":1,
     "LastId":1,
     "mesg":""
   }
  
  
   inputError = {
     "fullName":"",
     "mid":"",
     "prescriptionDate":"",
     "dosage":""
   }
  
   /**
    * 
    * @param route 
    * @param service 
    */
   constructor(private router: Router, private service: MedicationService){ }
  
   ngOnInit() {
     this.preload();
     this.search();
   }
   /**
    * Edits a College
    * @param id
    */
   edit(id:any){
     this.router.navigateByUrl("/medication/" + id);
   }
  
   /**
    * Delete a record
    */
  
   delete(id:any){
     var _self = this;
     this.service.delete(id, function (res:any, error:any){
       if (res.data.error){
         alert("Error:-----" + res.data.message);
         return;
       }
       _self.success = true;
       _self.message = res.data.message;
       _self.form = {
         "fullName":"",
        //  "category":"",
          "mid":0,
         "prescriptionDate":"",
         "dosage":"",
         "pageNo":1,
         "index":1,
         "MaxId":1,
         "LastId":1,
         "mesg":""
       };
       _self.search();
       setTimeout(() => {
         $("#timeout").fadeOut(1000);  
       },2000);
     }); 
   }
  
  preloadData : any = []
  preload() {
    var _self = this;
    this.service.preload(function(res:any, error:any){
      if(error){
        alert("Preload Error:" + error.message);
        return;
      }
      _self.preloadData = res.preloadList;
      console.log("PreloadList ------->", res.preloadList);
    });
  }
   
   /**
    * Searches and get list
    */
   search(){
     var _self = this;
     console.log("AAAAAA--------",this.form);
     this.service.search(this.form, function(res:any, error:any){
       if (error){
         alert("Error:-------" + res.result.message);
         return;
       }
       _self.form.index = res.result.index;
       _self.form.LastId = res.result.LastId;
       _self.form.MaxId = res.result.MaxId;
       _self.form.mesg = res.result.mesg;
       _self.list = res.result.data;
       console.log("LLLLLLLLL--------->", _self.list);
     })
   }
  
  
   search1(){
     var _self = this;
     console.log("AAAAAA--------",this.form);
     this.service.search1(this.form, function(res:any, error:any){
       
       
       _self.form.index = res.result.index;
       _self.form.LastId = res.result.LastId;
       _self.form.MaxId = res.result.MaxId;
       _self.form.mesg = res.result.mesg;
       _self.list = res.result.data;
       _self.inputError = res.form.inputError;
       
       if (!_self.list){
           _self.ngOnInit();
        }
      //  else{
      //    _self.ngOnInit()
      //  }
       
         console.log("LLLLLLLLL--------->", _self.list);
     })
   }
  
  
    /* Submit the form  */
   submit(){
     this.form.pageNo = 1;
     this.search1();
   }
  
  
  
   // Get Previous records
   previous(){
     this.form.pageNo -= 1;
     this.search();
   }
  
   // get next records
   next(){
     this.form.pageNo +=1;
     this.search();
   }
  
   // Reloads the page
  
   reload(){
     window.location.reload();
   }
  

}