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
  
  Back(){
    this.navCtrl.pop();
  }
}
