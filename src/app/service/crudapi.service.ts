import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudapiService {
  constructor(private fb: AngularFirestore) {

  }
  readData() {
    return this.fb.collection('meeting').snapshotChanges();
  }
  createData(docId: any) {
    return this.fb.collection('meeting').add(docId);
  }
  delData(docId: any) {
    return this.fb.doc('meeting' + '/' + docId).delete();
  }

  updateData(recordID, record) {
    return this.fb.doc('meeting' + '/' + recordID).update(record);
  }
}
