import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }
  
  w = ''
  cart = []
  ShoppingList = []
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
  
  postToCart(product,id){
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // };
    
    // title ={
    //   name: title
    // }
    // this.http.put("https://lastproject-kamimas.c9users.io:8081/api/shopping-cart/"+id,title,httpOptions).subscribe(data=>console.log("aight"))
    var key = null
    console.log(JSON.parse(localStorage.getItem('cart1')))
    
    
    
    if(this.ShoppingList.length == 0){
      this.ShoppingList.push({
        title: product.title,
        quantity: 1
      })
    }else{
      for(var i=0;i<this.ShoppingList.length;i++){
        
        if(this.ShoppingList[i].title == product.title)
          {
            key = i
            i = this.ShoppingList.length
          }
        else 
          key = '-1'
      }
      
      if(key == '-1'){
        this.ShoppingList.push({
          title: product.title,
          quantity: 1
        })
      }
      else{
        
        this.ShoppingList[key].quantity = parseInt(this.ShoppingList[key].quantity) + 1
        
      }
      
      let shoppingCart = localStorage.getItem('cart1')
      
      if(!shoppingCart){
         localStorage.setItem('cart1',JSON.stringify(this.ShoppingList))
      }
      else{
        localStorage.setItem('cart1',JSON.stringify(this.ShoppingList))
      }
    }
    
  
  }
  
  
  addToCart(product){
    let carte = this.getOrCreateCart();

    //this.getCart(carte)
    
    this.postToCart(product,carte)
    
    
  }
}
