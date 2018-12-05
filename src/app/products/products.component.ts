import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'
import {ActivatedRoute} from "@angular/router"
import { ShoppingCartService } from './../shopping-cart.service'
  
  

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  category: string;
  groc = []
  
  constructor(private productService: ProductService,private route: ActivatedRoute, private cartService: ShoppingCartService) { }
  
  ngOnInit() {
    this.productService.getProduct(this.onResponse.bind(this))
    
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category')
      console.log(this.category)
      this.productService.setCat(this.category)
      this.productService.getCategory(this.onResponse.bind(this))
    })
  }
  
  
  
  categories = ["All","Fruit", "Vegetable", 'Bread']
  groceryArray = []
  
  onResponse(res){
    //console.log(res)
    this.groceryArray = res
  }
  
  
  addToCart(product){
    this.cartService.addToCart(product)
  }
  

}
