import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 
    
  }
  
  getProduct(cb){
      this.http.get("https://lastproject-kamimas.c9users.io:8081/api/products").subscribe(data =>{
      console.log(data)
      cb(data)
    })
  }
  cats = null
  
  setCat(cat){
    
    this.cats = cat;
    console.log(this.cats);
    
  }
  getCat(){
    if(this.cats == "All")
      this.cats = ""
    return this.cats;
  }
  
  
  getCategory(cat){
    //console.log(cat)
    this.http.get("https://lastproject-kamimas.c9users.io:8081/api/products/"+this.getCat()).subscribe(data =>{
        
        //console.log(data)
        cat(data)
      })
    }
}

