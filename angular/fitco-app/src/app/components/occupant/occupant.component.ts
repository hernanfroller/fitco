import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Occupant } from '../../models/occupant';
import { AppSettings } from '../../app-settings';

@Component({
  selector: 'app-occupant',
  templateUrl: './occupant.component.html',
  styleUrls: ['./occupant.component.css']
})
export class OccupantComponent implements OnInit {

  occupant: Occupant;
  occupants: Observable<any[]>;
  selectedOccupants: any[];

  constructor(public db: AngularFirestore) {
    this.occupant = new Occupant();
    this.selectedOccupants = [];
    this.occupants = db.collection('occupants').snapshotChanges().pipe(map(items => {
      return items.map(a => {
        const data = a.payload.doc.data();
        const key = a.payload.doc.id;
        return {key, data};
      });
    }));
  }

  ngOnInit() {
  }

  onSave() {
    if(!this.occupant.dni || !this.occupant.name) {
      alert(AppSettings.VALIDATION_MESSAGE.replace("##", "DNI y Nombre"));
    } else {
      this.db.collection('occupants').add(Object.assign({}, this.occupant));
    }
  }

  onDelete() {
    for(let selectedOccupant of this.selectedOccupants) {
      this.db.collection('occupants').doc(selectedOccupant.key).delete();
    }
  }

}
