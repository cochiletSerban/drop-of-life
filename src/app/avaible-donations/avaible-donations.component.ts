import { Component, OnInit, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-avaible-donations',
  templateUrl: './avaible-donations.component.html',
  styleUrls: ['./avaible-donations.component.scss']
})
export class AvaibleDonationsComponent implements OnInit {
  mainTitle: string = "Avaible Donations"

  constructor() { 
    // if user.type = doctor
    this.mainTitle = "Donation requests from your hospital"
  }

  ngOnInit() {
  }



}
