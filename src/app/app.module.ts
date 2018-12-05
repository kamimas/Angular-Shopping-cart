import { BrowserModule            } from '@angular/platform-browser';
import { environment              } from './../environments/environment';
import { NgModule                 } from '@angular/core';
import { AngularFireModule        } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule, AngularFirestore   } from '@angular/fire/firestore';
import { AngularFireAuthModule    } from '@angular/fire/auth';
import { RouterModule, Routes     } from '@angular/router';
import { NgbModule                } from '@ng-bootstrap/ng-bootstrap';
import { AuthService              } from './auth.service';
import { CategoryService          } from './category.service';
import { ReactiveFormsModule, FormsModule               } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'



import { AppRoutingModule, routingComponent }   from './app-routing.module';
import { AppComponent                       }   from './app.component';
import { BsNavbarComponent                  }   from './bs-navbar/bs-navbar.component';
import { AuthGuard                          }   from './auth.guard';
import { UserService                        }   from './user.service';
import { ProductService } from './product.service';
import { ShoppingCartService } from './shopping-cart.service'




@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [ 
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
