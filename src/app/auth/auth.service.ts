import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {

  token: string = null;

  constructor(private router:Router) {}

  signupUser(email:string, password:string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        data => console.log('User signed up')
      )
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email:string, password:string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.storeToken()
            .then(
              () => this.router.navigate([''])
            )
        }
      )
      .catch(
        error => console.log(error)
      )
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      )
      return this.token;
  }

  storeToken() {
    return firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
  }

  isAuthenticated() {
    return this.token !== null;
  }
}
