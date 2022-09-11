import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  response = {};

  apiUrl = "http://127.0.0.1:5000/login"

  constructor(private http: HttpClient, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Allow': "PUT"
    })
  }

 async login(email:string, password: string){
    console.log(this.apiUrl)
    try{
      await this.http.put(this.apiUrl, {"email":email, "password": password},this.httpOptions).subscribe(async (res) => {
        if(res){
          this.response = res.valueOf()
          console.log(this.response)
          if (this.response !== false){
            console.log(this.response)
            this.router.navigate(['/success'])
          }else{
            throw new Error('Wrong Credentials')
          }
        }else{
          throw new Error('User Not Found')
        }
      })
    }catch(err){
      console.log(err)
    }
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return error
  }
}
