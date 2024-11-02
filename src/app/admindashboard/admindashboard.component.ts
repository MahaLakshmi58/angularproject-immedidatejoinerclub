import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'
import { ApiService } from '../Shared/api.service';
import { adminModel } from './admin-dash board model';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
clickAddJobs() {
throw new Error('Method not implemented.');
}
   formValue !: FormGroup;
   adminModelObj : adminModel = new adminModel();
   cityData !: any;
   showAdd !: boolean;
   showUpdate !:boolean;
  constructor(private formbuilder : FormBuilder,private api : ApiService) { }
public temp : any;
  ngOnInit(): void {
    this.formValue= this.formbuilder.group({
      CityName :['',[Validators.required]],
      Technologies:['',[Validators.required]],
      //Hote12:[''],
      CompanyName:['',[Validators.required]],
      Experience:['',[Validators.required]],
      immediatejoiner:['',[Validators.required]]
    })
    this.getAllcompaniess();
  }
  clickAddCompanies()
  {
    this.formValue.reset();
   this.showAdd=true;
   this.showUpdate= false;
  }
  postJob()
  {
    this.adminModelObj.CityName = this.formValue.value.CityName;
    this.adminModelObj.Technologies = this.formValue.value.Technologies;
    this.adminModelObj.CompanyName = this.formValue.value.CompanyName;
    this.adminModelObj.Experience = this.formValue.value.Experience;
    this.adminModelObj.immediatejoiner = this.formValue.value.immediatejoiner;
    


    this.api.postF(this.adminModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Jobs added successfully");
      
      this.formValue.reset();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.getAllcompaniess();
    },
    err=>{
      alert("something went wrong");
    })
  }
  getAllcompaniess()
  {
    this.api.getF()
    .subscribe(res=>{
      this.cityData=res;
    })
  }
  deleteJob(row :any)
  {
    this.api.deletecity(row.id)
    .subscribe(res=>{
      alert("City Deleted")
      this.getAllcompaniess();
    })
  }
  onEdit(row :any)
  {
    this.showAdd=false;
    this.showUpdate= true;
   this.temp=row.id;
    this.formValue.controls['CityName'].setValue(row.CityName);
    this.formValue.controls['Technologies'].setValue(row.Technologies);
    this.formValue.controls['CompanyName'].setValue(row.CompanyName);
    this.formValue.controls['Experience'].setValue(row.Experience);
    this.formValue.controls['immediatejoiner'].setValue(row.immediatejoiner);
    
  }

  updateJob()
  {
    this.adminModelObj.CityName = this.formValue.value.CityName;
    this.adminModelObj.Technologies = this.formValue.value.Technologies;
    this.adminModelObj.CompanyName = this.formValue.value.CompanyName;
    this.adminModelObj.Experience = this.formValue.value.Experience;
    this.adminModelObj.immediatejoiner = this.formValue.value.immediatejoiner;
    this.api.updateCity(this.adminModelObj,this.temp)
    .subscribe(res=>{
      alert("Updated Successfully");
      this.formValue.reset();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.getAllcompaniess();
    })
  }
}
