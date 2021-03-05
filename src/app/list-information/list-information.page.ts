import { CrudapiService } from '../service/crudapi.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface StudentData {
  date: Number;
  timeStart: Number;
  timeEnd: Number;
  room: String;
  event: String;
}

@Component({
  selector: 'app-list-information',
  templateUrl: './list-information.page.html',
  styleUrls: ['./list-information.page.scss'],
})
export class ListInformationPage implements OnInit {
  tmpobj: any;

  studentList = [];
  studentData: StudentData;
  studentForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public router: Router,
    private getcrud: CrudapiService,
    private fb: FormBuilder
  ) {
    this.studentData = {} as StudentData;
  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      date: ['DD-MM-YYYY', [Validators.required]],
      timeStart: ['hh:mm', [Validators.required]],
      timeEnd: ['hh:mm', [Validators.required]],
      room: ['', [Validators.required]],
      event: ['', [Validators.required]],
    });
  }

  CreateRecord() {
    this.getcrud
      .createData(this.studentForm.value)
      .then((resp) => {
        //Reset form
        this.studentForm.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  EditRecord(record) {
    record.isEdit = true;
    record.EditDate = record.date;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['date'] = recordRow.EditDate;
    // record['Age'] = recordRow.EditAge;
    // record['Address'] = recordRow.EditAddress;
    this.getcrud.updateData(recordRow.id, record);
    recordRow.isEdit = false;
  }
  Back(){
    this.navCtrl.pop();
  }
}
