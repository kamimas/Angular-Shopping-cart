import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireDatabase, FirebaseAuthState, AuthProviders, AuthMethods, AngularFire} from '@angular/fire';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authState: FirebaseAuthState = null;

  constructor(private af: AngularFire, private db: AngularFireDatabase, private router:Router) {

    af.auth.subscribe((auth) => {
      this.authState = auth;
    });
  }
  
  
  get authenticated(): boolean {
    return this.authState !== null;
  }
  
  get currentUser(): any {
    return this.authenticated ? this.authState.auth : null;
  }
  
  
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }
}
