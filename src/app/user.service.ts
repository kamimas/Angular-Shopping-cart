import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import * as firebase from 'firebase'
import { AngularFireAuth    } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }
  
  
  save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      email: user.email
    }).then(function(){
      console.log("Aight its updated")
      
    }).catch(function(){
      console.log("Something went wrong")
    })
  }
}
