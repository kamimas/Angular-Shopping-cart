import { Injectable }                            from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject  } from '@angular/fire/database'
import { Validators, FormControl, FormGroup }     from '@angular/forms'
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  cate$: AngularFireList<any>;
  cates$: AngularFireObject<any>;
  constructor(private db:AngularFireDatabase, private http: HttpClient) { 
   
  }
  
  submitted: boolean;
  deleteKey = ""
  
  form = new FormGroup({
    $key:     new FormControl(null),
    title:    new FormControl("", Validators.required),
    price:    new FormControl("", [Validators.required, Validators.min(0)]),
    category: new FormControl(""),
    imageUrl: new FormControl("", Validators.required)
  })
  
  saveGroceries(product){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body ={
        title: product.title,
        price: product.price,
        category: product.category,
        imageUrl: product.imageUrl
      }
    console.log(body)
      this.http.post("https://lastproject-kamimas.c9users.io:8081/api/products",body,httpOptions).subscribe(data =>{
        console.log(data)
      })
      
      this.form.reset()
  }
  getGroceries(cb){
    
    this.http.get("https://lastproject-kamimas.c9users.io:8081/api/products").subscribe(data =>{
      console.log(data)
      cb(data)
    })
  }
  
  
  getDeleteKey(){
    return this.deleteKey;
  }
  
  getProduct(product){
    this.form.setValue(product)
    this.deleteKey = product.$key
  }
  
  updateProduct(product){
    this.cate$ = this.db.list('products')
    this.cate$.update(product.$key,
    {
      title: product.title,
      price: product.price,
      category: product.category,
      imageUrl: product.imageUrl
    })
    this.form.reset()
  }
  
  
  deleteRecord(key: string){
    this.cate$ = this.db.list('products')
    //const promise = 
    const promise = this.cate$.update(key, {
      title: "update this piece of shit"
    });
    promise 
    .then(_ => console.log('success'))
    .catch(err => console.log(err, 'You do not have access!'));
    console.log(this.cates$)
    
    
    
    //console.log("you deleted " + key)
    this.deleteKey = ""
  }
}
