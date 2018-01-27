import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  navItemSelected: string = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBxOmK03yYxyxPGG99j44tyzNNLEaoN2TM",
      authDomain: "ng-recipe-book-c7787.firebaseapp.com"
    })
  }

  displaySection(sectionSelected:string) {
    this.navItemSelected = sectionSelected
  }
}
