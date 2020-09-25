import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../models/products';
import { Router } from '@angular/router';

@Injectable()
export class ProductServiceService {

  constructor(private http: HttpClient, private route: Router) { }

  getProd(){
    return this.http.get<Products[]>("https://products-webapi-reg.azurewebsites.net/api/Products", 
    {headers: new HttpHeaders (
      {
        'Authorization' : 'bearer '+ localStorage.getItem("jwt")
      }
    )});
  }

  addProd(add : Products) {
    this.http.post("https://products-webapi-reg.azurewebsites.net/api/Products", add, {headers: new HttpHeaders (
      {
        'Authorization' : 'bearer '+ localStorage.getItem("jwt")
      }
    )}).subscribe(
      (data) => {
        console.log("Product Added Successful", data);
        this.route.navigate(['Products'])
      },
      error => {
        console.log("Error", error);
      }
    );;
  }
  
  deleteProd(id: number) {
    this.http.delete("https://products-webapi-reg.azurewebsites.net/api/Products/" + id, {headers: new HttpHeaders (
      {
        'Authorization' : 'bearer '+ localStorage.getItem("jwt")
      }
    )}).subscribe(
      (data) => {
        console.log("Product Deleted Successful", data);
        console.log(data);
        this.route.navigate(['Products']);
        location.reload();
      },
      error => {
        console.log("Error", error);
      }
    );
  }

}
