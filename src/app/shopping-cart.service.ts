import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }
  
  w = ''
  cart = []
  
  private create(){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    var x = Math.floor(Math.random() * 20) + 1 ;
    x.toString()
    var z = Math.floor(Math.random() * 9) + 1;
    z.toString()
    
    this.w = z + "" + x

    let body = {
      dateCreated: new Date().getTime(),
      id: this.w
    }
    return this.http.post("https://lastproject-kamimas.c9users.io:8081/api/shopping-cart",body,httpOptions)
    
    
  }
  
  
  
  
  private getCart(cartId: string){
    this.getFunction(this.onResponse(this))
    this.w = cartId
  }
  
  onResponse(res){
    this.cart = res
  }
  
  getFunction(cb){
    this.http.get("https://lastproject-kamimas.c9users.io:8081/api/shopping-cart/"+this.w).subscribe(data =>{
      console.log(data)
      cb(data)
    })
  }
  
  
  
  private getOrCreateCart(){
    let cartId = localStorage.getItem('cartId')
    
    if(!cartId){
      this.create().subscribe(result =>{
        localStorage.setItem('cartId', this.w)
        console.log(this.w)
        
      })
      return this.w

    }else{
      //console.log(cartId)
        return cartId      
    }
  }
  
  
  addToCart(product){
    let carte = this.getOrCreateCart();
    console.log(carte)

    this.getCart(carte)
    
    console.log(this.cart)
  }
}
