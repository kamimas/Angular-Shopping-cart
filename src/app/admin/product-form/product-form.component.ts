import { Component, OnInit } from '@angular/core';
import { CategoryService          } from './../../category.service';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { Observable        } from 'rxjs/Observable'; 

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  
  
  constructor(private categoryService:CategoryService) {
    
  }
  
  submitted: boolean;
  
  groceryArray = []
  
  
  ngOnInit(){
    this.categoryService.getGroceries().subscribe(
      list => {
        this.groceryArray = list.map(item => {
          return{
            $key: item.key,
            ...item.payload.val()
          }
        })
      });
  }
  
  save(product){
    this.submit = true;
    
    console.log(product)
    this.categoryService.saveGroceries(product)
  }


  
}
