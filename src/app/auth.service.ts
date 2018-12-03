import { Injectable } from '@angular/core';
import { AngularFireAuth    } from '@angular/fire/auth';
import * as firebase         from 'firebase/app';
import { Observable } from 'rxjs/Observable'; 
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) { 
    this.user$ = afAuth.authState;
    
  }
  
  
  
 
  
  
  loginWithGoogle(){
    console.log("hi i got to here");
    
    
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    
    this.router.navigate(['']);
  }
  
  login(){
    var password =  (<HTMLInputElement>document.getElementById("inputPassword")).value;
    var email    =  (<HTMLInputElement>document.getElementById("inputEmail")).value;
    
    
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(function(){
    
      console.log("Im here")
      this.router.navigate(['shopping-cart']);
      
    })
    .catch(function(error) {
      // Handle Errors here.

      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  
  signUp(){
    
    var email    = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    
    this.afAuth.auth.createUserWithEmailAndPassword(email, password) 
    .then(function(){
      this.router.navigate(['home'])
      console.log("WE gucci");
    })
  }
  
  logout(){
    this.afAuth.auth.signOut();
  
    window.location.reload();
  }

  

}
