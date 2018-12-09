import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  doctors = [
    "Dan Intepatorul",
    "Ion Taietorul",
    "Aurel Anestezie",
    "Ioana Perfuzie",
    "Gigi Antibiotic",
    "Alexandra Seringa"
  ];
  doctorsForm: FormGroup;

  constructor() { }

  ngOnInit() {
    const doctorsFormArray = new FormArray([]);
    this.doctors.forEach(question => {
      doctorsFormArray.push(new FormControl(false));
    });
    this.doctorsForm = new FormGroup({'doctors': doctorsFormArray}, this.doctorsFormValidator.bind(this));
  }

  doctorsFormValidator(c: FormGroup) {
    // let valid = true;
    // (<FormArray>(c.get('doctors'))).controls.forEach(control => {
    //   if (control.value) {
    //     valid = false;
    //   }
    // });    
    // if (valid) {return null; }
    // return { invalid: true };
  }

  onSubmit() {
    for (var _i = 0; _i < this.doctors.length; _i++) {
      console.log(this.doctors[_i]+ " " +this.doctorsForm.value.doctors[_i]);
    }

    // Array of values, without doctors name
      console.log(this.doctorsForm.value);
    }
}