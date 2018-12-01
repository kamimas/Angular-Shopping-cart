import { BrowserModule }            from '@angular/platform-browser';
import { environment              } from './../environments/environment';
import { NgModule                 } from '@angular/core';
import { AngularFireModule        } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule    } from '@angular/fire/auth';
import { RouterModule, Routes     } from '@angular/router';
import { NgbModule                } from '@ng-bootstrap/ng-bootstrap';
import {AuthService               } from './core/auth.service';


import { AppRoutingModule, routingComponent }   from './app-routing.module';
import { AppComponent                       }   from './app.component';
import { BsNavbarComponent                  }   from './bs-navbar/bs-navbar.component';




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
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    ],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
