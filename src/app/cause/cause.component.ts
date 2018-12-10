import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, ViewChild, EventEmitter, Input } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';
import { Renderer3 } from '@angular/core/src/render3/renderer';
import { AvailableDonations } from '../objects/availableDonations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.scss']
})
export class CauseComponent implements OnInit, AfterViewInit {
  globalActions = new EventEmitter<string|MaterializeAction>();
  modalActions = new EventEmitter<string|MaterializeAction>();
  procent = 0;
  @ViewChild('blood') blood: ElementRef;
  @Input() donations: AvailableDonations;
  params =  ['thank you for you donation' , 3000];

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) { }

  ngOnInit() {
    this.params =  [this.donations.name + ' thank you for you donation' , 3000];
  }


  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  triggerToast() {
    this.globalActions.emit('toast');
    localStorage.setItem('donated', 'true');
    this.router.navigate(['/user-profile']);
  }

  ngAfterViewInit() {
    // let timeleft = 0;

    // const downloadTimer = setInterval(() => {
    //   this.procent += timeleft;
    //   this.procent = this.procent / 10;
    //   timeleft++;
    //   if (timeleft > 10) {
    //     timeleft = 0;
    //     this.procent = 0;
    //   }
    // }, 1000);
    this.procent = this.donations.existing_quantity / this.donations.requested_quantity;
  }

  checkDonor() {
    if (localStorage.getItem('userType') === '4') {
      return true;
    }
    return false;
  }

}
