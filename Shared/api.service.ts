import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getProfile() {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }
  postF(data : any)
  {
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  postTechnologies(data : any)
  {
    return this.http.post<any>("http://localhost:3000/posts1",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  getF()
  {
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  getTechnologies()
  {
    return this.http.get<any>("http://localhost:3000/posts1")
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  deletecity(data : number)
  {
    return this.http.delete<any>("http://localhost:3000/posts/"+data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  deleteTechnologies(data : number)
  {
    return this.http.delete<any>("http://localhost:3000/posts1/"+data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  updateCity(data:any,id:number)
  {
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateTechnologies(data:any,id:number)
  {
    return this.http.put<any>("http://localhost:3000/posts1/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postapplythejobDetails(data : any)
  {
    return this.http.post<any>("http://localhost:3000/applythejob",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  postTechnologiesDetails(data : any)
  {
    return this.http.post<any>("http://localhost:3000/applycompanies",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  postLogin(data : any)
  {
    return this.http.post<any>("http://localhost:3000/login",data)
    .pipe(map((res:any)=>{
      return res;
  }))

  
}
getReg()
{
  return this.http.get<any>("http://localhost:3000/signupUsers")
    .pipe(map((res:any)=>{
      return res;
    }))
}
getLogin()
{
  return this.http.get<any>("http://localhost:3000/login")
    .pipe(map((res:any)=>{
      return res;
    }))
}
getapplyJob()
{
  return this.http.get<any>("http://localhost:3000/applythejob")
    .pipe(map((res:any)=>{
      return res;
    }))
}
getapplycompanies()
{
  return this.http.get<any>("http://localhost:3000/applycompanies")
    .pipe(map((res:any)=>{
      return res;
    }))
}
getapplytheJob(){
  return this.http.get<any>("http://localhost:3000/applythejob")
  .pipe(map((res:any)=>{
    return res;
  }))
}
}

