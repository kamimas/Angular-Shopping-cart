import { BrowserModule            } from '@angular/platform-browser';
import { environment              } from './../environments/environment';
import { NgModule                 } from '@angular/core';
import { AngularFireModule        } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule    } from '@angular/fire/auth';
import { RouterModule, Routes     } from '@angular/router';
import { NgbModule                } from '@ng-bootstrap/ng-bootstrap';
import { AuthService              } from './auth.service';
import { CategoryService          } from './category.service';
import { FormsModule              } from '@angular/forms';

import { AppRoutingModule, routingComponent }   from './app-routing.module';
import { AppComponent                       }   from './app.component';
import { BsNavbarComponent                  }   from './bs-navbar/bs-navbar.component';
import { AuthGuard                          }   from './auth.guard';
import { UserService                        }   from './user.service';






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
    FormsModule
  ],
  providers: [ 
    AuthService,
    AuthGuard,
    UserService,
    CategoryService
  ],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
