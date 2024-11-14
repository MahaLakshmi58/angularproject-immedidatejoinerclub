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
    return this.http.post<any>("https://json-server-2h1w.onrender.com/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  postTechnologies(data : any)
  {
    return this.http.post<any>("https://json-server-2h1w.onrender.com/posts1",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  getF()
  {
    return this.http.get<any>("https://json-server-2h1w.onrender.com/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  getTechnologies()
  {
    return this.http.get<any>("https://json-server-2h1w.onrender.com/posts1")
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  deletecity(data : number)
  {
    return this.http.delete<any>("https://json-server-2h1w.onrender.com/posts/"+data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  deleteTechnologies(data : number)
  {
    return this.http.delete<any>("https://json-server-2h1w.onrender.com/posts1/"+data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  updateCity(data:any,id:number)
  {
    return this.http.put<any>("https://json-server-2h1w.onrender.com/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateTechnologies(data:any,id:number)
  {
    return this.http.put<any>("https://json-server-2h1w.onrender.com/posts1/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postapplythejobDetails(data : any)
  {
    return this.http.post<any>("https://json-server-2h1w.onrender.com/applythejob",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  postTechnologiesDetails(data : any)
  {
    return this.http.post<any>("https://json-server-2h1w.onrender.com/applycompanies",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  postLogin(data : any)
  {
    return this.http.post<any>("https://json-server-2h1w.onrender.com/login",data)
    .pipe(map((res:any)=>{
      return res;
  }))

  
}
getReg()
{
  return this.http.get<any>("https://json-server-2h1w.onrender.com/signupUsers")
    .pipe(map((res:any)=>{
      return res;
    }))
}
getLogin()
{
  return this.http.get<any>("https://json-server-2h1w.onrender.com/login")
    .pipe(map((res:any)=>{
      return res;
    }))
}
getapplyJob()
{
  return this.http.get<any>("https://json-server-2h1w.onrender.com/applythejob")
    .pipe(map((res:any)=>{
      return res;
    }))
}
getapplycompanies()
{
  return this.http.get<any>("https://json-server-2h1w.onrender.com/applycompanies")
    .pipe(map((res:any)=>{
      return res;
    }))
}
getapplytheJob(){
  return this.http.get<any>("https://json-server-2h1w.onrender.com/applythejob")
  .pipe(map((res:any)=>{
    return res;
  }))
}
}

