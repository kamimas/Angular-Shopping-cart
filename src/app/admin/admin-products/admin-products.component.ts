import { Component, OnInit } from '@angular/core';
import { CategoryService   } from './../../category.service'
import { Observable        } from 'rxjs/Observable'; 

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  
  productsArray = []
  constructor(private productService: CategoryService) { 
    // this.productService.getAll().subscribe( list => {
    //     this.productsArray = list.map(item => {
    //       return{
    //         $key: item.key,
    //         ...item.payload.val()
    //       }
    //     })
    //   });
      
    this.productService.getGroceries(this.onResponse.bind(this))
  }
  
  
  onResponse(res){
    this.productsArray = res
  }
  
  get(p){
    console.log(p.title)
    this.productService.getProduct(p)
  }
  ngOnInit() {
  }

}
