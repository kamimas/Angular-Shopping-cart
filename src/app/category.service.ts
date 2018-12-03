import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database'


@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  cate$: AngularFireList<any>;
  
  constructor(private db:AngularFireDatabase) { 
   
  }
  
  
  saveGroceries(product){
    this.cate$.push({
      title: product.title,
      price: product.price,
      category: product.category,
      imageUrl: product.imageUrl
    })
  }
  getGroceries(){
    this.cate$ = this.db.list('categories')
    return this.cate$.snapshotChanges()
  }
  
}
