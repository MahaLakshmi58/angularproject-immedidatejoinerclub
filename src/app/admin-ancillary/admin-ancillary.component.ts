import { Component, OnInit } from '@angular/core';
import { DomElementSchemaRegistry } from '@angular/compiler';
 
  import{FormBuilder,FormGroup, Validators} from '@angular/forms'
  import { ApiService } from '../Shared/api.service';
import { adminAncillaryModel } from './admin-ancillary.model';

@Component({
  selector: 'app-admin-ancillary',
  templateUrl: './admin-ancillary.component.html',
  styleUrls: ['./admin-ancillary.component.css']
})
export class AdminAncillaryComponent implements OnInit {
  formValue !: FormGroup;
  adminModelObj : adminAncillaryModel = new adminAncillaryModel();
  cityData !: any;
  showAdd !: boolean;
  showUpdate !:boolean;
  
  
    constructor(private formbuilder : FormBuilder,private api : ApiService) { }
  public temp : any;
    ngOnInit(): void {
      this.formValue= this.formbuilder.group({
        CityName :['',[Validators.required]],
        Pizza:['',[Validators.required]],
      
        Rolls:['',[Validators.required]],
        Cakes:['',[Validators.required]],
        Shakes:['',[Validators.required]]
      })
      this.getAllcompaniess();
    }
    clickAddcompanies()
    {
      this.formValue.reset();
     this.showAdd=true;
     this.showUpdate= false;
    }
    postTechnologies()
    {
      this.adminModelObj.CityName = this.formValue.value.CityName;
      this.adminModelObj.Pizza = this.formValue.value.Pizza;
      this.adminModelObj.Rolls = this.formValue.value.Rolls;
      this.adminModelObj.Cakes = this.formValue.value.Cakes;
      this.adminModelObj.Shakes = this.formValue.value.Shakes;
      
  
  
      this.api.postTechnologies(this.adminModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Technologies added successfully");
        
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
      this.api.getTechnologies()
      .subscribe(res=>{
        this.cityData=res;
      })
    }
    deleteJob(row :any)
    {
      this.api.deleteTechnologies(row.id)
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
      this.formValue.controls['Pizza'].setValue(row.Pizza);
      this.formValue.controls['Rolls'].setValue(row.Rolls);
      this.formValue.controls['Cakes'].setValue(row.Cakes);
      this.formValue.controls['Shakes'].setValue(row.Shakes);
      
    }
  
    UpadateTechnologies()
    {
      this.adminModelObj.CityName = this.formValue.value.CityName;
      this.adminModelObj.Pizza = this.formValue.value.Pizza;
      this.adminModelObj.Rolls = this.formValue.value.Rolls;
      this.adminModelObj.Cakes = this.formValue.value.Cakes;
      this.adminModelObj.Shakes = this.formValue.value.Shakes;
      this.api.updateTechnologies(this.adminModelObj,this.temp)
      .subscribe(res=>{
        alert("Updated Successfully");
        this.formValue.reset();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getAllcompaniess();
      })
    }
  }
  

