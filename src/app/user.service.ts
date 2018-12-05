import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import * as firebase from 'firebase'
import { AngularFireAuth    } from '@angular/fire/auth';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) { }
  
  
  save(user: firebase.User){
    let body= {
      u: user.uid,
      e: user.email
    }
    
    this.db.collection('users').add(body).then(function(){
      console.log("Aight its updated")
      
    }).catch(function(){
      console.log("Something went wrong")
    })
  }
}
