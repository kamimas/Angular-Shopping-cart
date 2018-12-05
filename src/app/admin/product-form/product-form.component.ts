import { Component, OnInit                     } from '@angular/core';
import { CategoryService                       } from './../../category.service';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { Observable                            } from 'rxjs/Observable'; 

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  
  
  constructor(private categoryService:CategoryService) {
    
  }
  
  submitted: boolean;
  formControls = this.categoryService.form.controls;
  
  groceryArray = []
  
 
  deleteKey = ""
  
  ngOnInit(){
    this.categoryService.getGroceries(this.onResponse.bind(this))
    
    
  }
  
  onResponse(res){
    this.groceryArray = res
  }
  save(){
    this.submitted = true;
    
    if(this.categoryService.form.valid){
      if (this.categoryService.form.get('$key').value==null)
        this.categoryService.saveGroceries(this.categoryService.form.value)
      else
        this.categoryService.updateProduct(this.categoryService.form.value)
      this.submitted = false;
    }
  }

  //this.categoryService.deleteRecord(this.categoryService.getDeleteKey())
  delete(){
    if(confirm('You are going to delete the following record'))
      this.categoryService.deleteRecord(this.categoryService.getDeleteKey())
    else  
      console.log("he is a bitch")
      
  }

  
}
