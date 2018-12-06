import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-donation-request',
  templateUrl: './create-donation-request.component.html',
  styleUrls: ['./create-donation-request.component.scss']
})
export class CreateDonationRequestComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();
  createDonationForm: FormGroup;
  selectedOption="";
  namePlaceholder = "Hospital Name";
  hospitalDisable = false;
  patientDisable = false;
  hospitalClicked = false;
  patientClicked = false;
  usedIcon = "local_hospital";
  constructor() { }

  ngOnInit() {
    this.createDonationForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'requestedQuantity': new FormControl(null, Validators.required),
      'bloodType': new FormControl(null, Validators.required)
    });
  }

  changePlaceholderHospital() {
    if (!this.hospitalClicked) {
      this.namePlaceholder = "Hospital Name";
      this.usedIcon = "local_hospital";
      this.patientDisable = true;
      this.hospitalClicked = true;
    } else if (this.hospitalClicked) {
      this.hospitalClicked = false;
      this.patientDisable = false;
    }
  }

  changePlaceholderPatient() {
    if (!this.patientClicked) {
      this.namePlaceholder = "Patient Name";
      this.usedIcon = "account_circle";
      this.hospitalDisable = true;
      this.patientClicked = true;
    } else if (this.patientClicked) {
      this.patientClicked = false;
      this.hospitalDisable = false;
    }
  }

  createRequest() {}
}
