import { NgModule               }   from '@angular/core';
import { Routes, RouterModule, CanActivate   }   from '@angular/router';
import { HomeComponent          }   from './home/home.component';
import { ProductsComponent      }   from './products/products.component';
import { ShoppingCartComponent  }   from './shopping-cart/shopping-cart.component';
import { CheckOutComponent      }   from './check-out/check-out.component';
import { OrderSucComponent      }   from './order-suc/order-suc.component';
import { TrackOrdersComponent   }   from './track-orders/track-orders.component';
import { AdminOrdersComponent   }   from './admin/admin-orders/admin-orders.component';
import { LoginComponent         }   from './login/login.component';
import { AdminProductsComponent }   from './admin/admin-products/admin-products.component';
import { MyOrdersComponent      }   from './my-orders/my-orders.component';
import { AuthGuard              }   from './auth.guard';
import { SingUpComponent        }   from './sing-up/sing-up.component';
import { ProductFormComponent   }   from './admin/product-form/product-form.component';



const routes: Routes = [
  {path: ''              ,component: HomeComponent},
  {path: 'products'      ,component: ProductsComponent},
  {path: 'shopping-cart' ,component: ShoppingCartComponent},
  {path: 'check-out'     ,component: CheckOutComponent },
  {path: 'login'         ,component: LoginComponent},
  {path: 'admin/products',component: AdminProductsComponent, canActivate: [AuthGuard] },
  {path: 'admin/orders'  ,component: AdminOrdersComponent,canActivate: [AuthGuard]},
  {path: 'my/orders'     ,component: MyOrdersComponent, canActivate: [AuthGuard]},
  {path: 'signup'        ,component: SingUpComponent},
  {path: 'admin/products/new',component: ProductFormComponent, canActivate: [AuthGuard] },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent, ProductsComponent, ShoppingCartComponent, CheckOutComponent, LoginComponent, AdminOrdersComponent, AdminProductsComponent, MyOrdersComponent, TrackOrdersComponent, OrderSucComponent, SingUpComponent, ProductFormComponent]