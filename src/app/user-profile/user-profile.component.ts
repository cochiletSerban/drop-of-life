import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
declare var $: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  modalActions = new EventEmitter<string|MaterializeAction>();

  questions = [
    "Do you weigh between 50kg and 160kg ?",
    "Are you aged between 17 and 66 ?",
    "Do you have a good mental and physical health?",
    "Do you take care of your personal hygiene? ",
    "Do you have a: flu, sore throat or fever infection?",
    "Do you have tatoos or piercings ?",
    "In the last month have you taken any of the following medications: Accutane, Epuris, Clarus, Isotretinoin Toctino, Alitretinoin Proscar, Propecia, Finasteride?",
    "In the last 3 months have you had a vaccination?",
    "Are you currently taking antibiotics ?",
    "In the last 12 months have you had a rabies shot or a shot for exposure to hepatitis B?",
    "Do you have diabetes?",
    "In the last 6 months have you been pregnant?",
    "Have you ever had malaria?",
    "Have you ever had a positive test for the HIV/AIDS virus?",
    "Have you ever had cancer?",
    "Have you ever had a coma or stroke?",
    "Have you ever had problems with your heart or lungs?",
    "In the last 12 months have you used cocaine?",
    "In the last 12 months have you had sex with anyone who has HIV/AIDS?",

//     persoanele care au relatii sexuale (protejate si neprotejate) cu mai mult de doi parteneri
// persoanele care au relatii sexuale cu parteneri de acelasi sex
// persoanele care au contact sexual cu un partener cu HIV, HTLV, hepatite virale B si C, sifilis
// persoanele care au avut contact sexual cu parteneri platiti
// persoanele care care au avut contacte sexuale cu parteneri care se/s-au drogat
// persoanele care au avut raport sexual ocazional neprotejat in ultimele 6 luni
  ]

  constructor() { }

  ngOnInit() {
    $('.tabs').tabs();
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }
}

