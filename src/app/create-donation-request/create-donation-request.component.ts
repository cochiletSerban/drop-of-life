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
  selectedOption=""
  constructor() { }

  ngOnInit() {
    this.createDonationForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required),
      'bloodType': new FormControl(null, Validators.required),
      'deadLine': new FormControl(null, Validators.required),
    });
  }
  createRequest() {}
}
