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
import { AuthGuard                } from './auth-guard.service';

const routes: Routes = [
  {path: ''              ,component: HomeComponent},
  {path: 'products'      ,component: ProductsComponent},
  {path: 'shopping-cart' ,component: ShoppingCartComponent},
  {path: 'check-out'     ,component: CheckOutComponent, canActivate: [AuthGuard] },
  {path: 'login'         ,component: LoginComponent},
  {path: 'admin/products',component: AdminProductsComponent },
  {path: 'admin/orders'  ,component: AdminOrdersComponent},
  {path: 'my/orders'     ,component: MyOrdersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent, ProductsComponent, ShoppingCartComponent, CheckOutComponent, LoginComponent, AdminOrdersComponent, AdminProductsComponent, MyOrdersComponent, TrackOrdersComponent, OrderSucComponent]