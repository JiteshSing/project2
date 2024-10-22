import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffmemberService } from '../service/staffmember.service';

@Component({
  selector: 'app-staffmember',
  templateUrl: './staffmember.component.html',
  styleUrls: ['./staffmember.component.css']
})
export class StaffmemberComponent implements OnInit {

  form = {
    "id":0,
    "fullName":"",  
    "did":"",
    "joiningDate":"",
    "previousEmployer":"",
  }

  inputError = {
    "fullName":"",
    "did":"",
    "joiningDate":"",
    "previousEmployer":"",
  }

  message = "";

  success: boolean = true;

  constructor(private aroute:ActivatedRoute,private router:Router,private service:StaffmemberService) { }

  ngOnInit(): void {
    var _self = this;
    _self.form.id = parseInt(this.aroute.snapshot.paramMap.get("id") || "{}");
    if ( !isNaN(_self.form.id) && _self.form.id > 0){
      this.service.get(_self.form.id, function (res:any, error:any){
        if (error){
          alert("Error:----" + error.message);
          return ;
        }
        _self.form = res.data;
      });
    }
    this.preload();
  }

  save(){
    var _self = this;
    // this.ngOnInit();
    if (isNaN(this.form.id)){
      this.form.id = 0;
    }
    this.service.save(this.form, function (res:any, error:any){
      if (res.data.error){
        _self.success = false;
        _self.form = res.form
        _self.message = res.data.message;
        _self.inputError = res.form.inputError;
        return;
      }
      _self.success = res.data.message;
      if(_self.success){
        _self.success = true;
        _self.message = res.data.message;
        _self.form=res.data.data;
        _self.inputError = {
          "fullName":"",
          "did":"",
          "joiningDate":"",
          "previousEmployer":"",
        }
      }else{
        _self.message = "Data was not saved"
      }
    });
  }

  reset(){
    this.form = {
      "id":0,
      "fullName":"",
      "did":"",
      "joiningDate":"",
      "previousEmployer":"",
    };
    this.ngOnInit();
    this.inputError = {
      "fullName":"",
      "did":"",
      "joiningDate":"",
      "previousEmployer":"",
    };
    this.message = "";
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



}
