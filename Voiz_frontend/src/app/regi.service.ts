import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dongle } from './dongle';
import { Payment } from './payment';
import { Postpaid } from './postpaid';
import { Prepaid } from './prepaid';
import { Remo } from './remo';
// import { Employee } from './employee';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class RegiService {
  temp = '';
  constructor( private _http : HttpClient) { }

  public login(user:User):Observable<any>
  {
     return this._http.post<any>("http://localhost:1334/login",user)
  }
  
  public getById(emailId:string):Observable<any>{
    return this._http.get<any>("http://localhost:1334/profile/"+emailId)
      }
  public reg(user:User):Observable<any>
  {
     return this._http.post<any>("http://localhost:1334/registeruser",user)
  }
  public fetchUserByEmailId(user:User):Observable<any>{
    return this._http.get<any>("http://localhost:1334/loginsuccess/");
  }
  public updateUserPasswordFromRemote(id4:string,pass:string):Observable<any>{
    return this._http.put<any>("http://localhost:1334/updatepassword/"+id4, pass)
  }
  
  

}
@Injectable()
export class EmployeeService
{
  constructor(private http: HttpClient) { }
  public logi(employee: Remo):Observable<any>
  {
     return this.http.post<any>("http://localhost:1334/api/log",employee)
  }
  

  public reg(employee: Remo):Observable<any>
  {
     return this.http.post<any>("http://localhost:1334/api/registeruse",employee)
  }
  public updateUserPasswordFromRemote(id4:string,pass:string):Observable<any>{
    return this.http.put<any>("http://localhost:1334/api/updatepassword/"+id4, pass)
  }
  public getByEmailId(emailId:string):Observable<any>{
    return this.http.get<any>("http://localhost:1334/api/profile/"+emailId)
      }
  



  private baseUrl = 'http://localhost:1334/api/employees/'; 
  


  // public login(employee: Employee):Observable<any>
  // {
  //    return this.http.post<any>("http://localhost:1334/api/employees",employee)
  // }

  getEmployees() : Observable<Object> {
    return this.http.get<Object>(this.baseUrl);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createEmployee(employee: Remo): Observable<Object> {
    return this.http.post(`${this.baseUrl}` , employee);
  }

  updateEmployee(id: number, employee: Remo): Observable<any> {
    return this.http.put<any>(this.baseUrl + employee.id, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
  
  
}
@Injectable()
export class PrepaidService
{
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:1334/pre/prepaidplan/'; 
  

  getpre() : Observable<Object> {
    return this.http.get<Object>(this.baseUrl);
  }

  getPreById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  addpre(prepaid: Prepaid): Observable<Object> {
    return this.http.post(`${this.baseUrl}` , prepaid);
  }

  updatepre(id: number, prepaid: Prepaid ): Observable<any> {
    return this.http.put<any>(this.baseUrl + prepaid.id, prepaid);
  }

  deletepre(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
  
}
@Injectable()
export class PostpaidService
{
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:1334/post/postpaidplan/'; 
  

  getpost() : Observable<Object> {
    return this.http.get<Object>(this.baseUrl);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  addpost(postpaid: Postpaid): Observable<Object> {
    return this.http.post(`${this.baseUrl}` , postpaid);
  }

  updatepost(id: number, postpaid: Postpaid ): Observable<any> {
    return this.http.put<any>(this.baseUrl + postpaid.id, postpaid);
  }

  deletepost(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
  
}
@Injectable()
export class DongleService
{
  constructor(private http: HttpClient) { }


  private baseUrl = 'http://localhost:1334/dong/dongleplan/'; 
  

  getdongle() : Observable<Object> {
    return this.http.get<Object>(this.baseUrl);
  }

  getDongleById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  adddongle(dongle: Dongle): Observable<Object> {
    return this.http.post(`${this.baseUrl}` , dongle);
  }

  updatedongle(id: number, dongle: Dongle ): Observable<any> {
    return this.http.put<any>(this.baseUrl + dongle.id, dongle);
  }

  deletedongle(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
  
}
@Injectable()
export class PaymentService
{
  constructor(private http: HttpClient) { }


  public getpaymentbyId(emailId:string):Observable<any>{
    return this.http.get<any>("http://localhost:1334/pay/payments/"+emailId);
      }

  private baseUrl = 'http://localhost:1334/pay/payment/'; 
  

  getpay() : Observable<Object> {
    return this.http.get<Object>(this.baseUrl);
  }

  getPayById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  addpay(pay: Payment): Observable<Object> {
    return this.http.post(`${this.baseUrl}` , pay);
  }
  

}

