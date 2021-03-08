import { Component } from '@angular/core';

import { CrudapiService } from '../service/crudapi.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tmpobj: any;
  todayDate: Date = new Date();
  constructor(
    private getcrud: CrudapiService,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.getcrud.readData().subscribe((data) => {
      this.tmpobj = data.map((e) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          mydate: e.payload.doc.data()['date'.toString()],
          mytimeStart: e.payload.doc.data()['timeStart'.toString()],
          mytimeEnd: e.payload.doc.data()['timeEnd'.toString()],
          myroom: e.payload.doc.data()['room'.toString()],
          myevent: e.payload.doc.data()['event'.toString()],
        };
      });
      console.log(this.tmpobj);
    });
  }

  RemoveRecord(rowID) {
    this.getcrud.delData(rowID.id);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditDate = record.date;
    record.EdittimeStart = record.timeStart;
    record.EdittimeEnd = record.timeEnd;
    record.Editroom = record.room;
    record.Editevent = record.event;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['date'] = recordRow.EditDate;
    record['timeStart'] = recordRow.EdittimeStart;
    record['timeEnd'] = recordRow.EdittimeEnd;
    record['room'] = recordRow.Editroom;
    record['event'] = recordRow.Editevent;
    this.getcrud.updateData(recordRow.id, record);
    recordRow.isEdit = false;
    console.log(record['timeStart']);
  }
  refresh(): void {
    window.location.reload();
  }
}
