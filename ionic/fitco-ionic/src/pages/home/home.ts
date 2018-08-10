import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Occupant } from '../../app/models/occupant';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  occupant: Occupant;
  occupants: Observable<any[]>;

  constructor(public db: AngularFirestore, public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

    this.occupants = db.collection('occupants').valueChanges();

  }

  ionViewWillEnter() {
  }
}
