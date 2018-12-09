import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { PostDonationService } from '../services/post-donation.service';
import { AvailableDonations } from '../objects/availableDonations';


@Component({
  selector: 'app-avaible-donations',
  templateUrl: './avaible-donations.component.html',
  styleUrls: ['./avaible-donations.component.scss']
})
export class AvaibleDonationsComponent implements OnInit {
  mainTitle: string = "Avaible Donations"
  donations : AvailableDonations[];

  constructor(private donationService:PostDonationService) { 
    // if user.type = doctor
    this.mainTitle = "Donation requests from your hospital"
  }

  ngOnInit() {
    this.donationService.getDonations().subscribe(
      (donations: AvailableDonations[]) => {
        this.donations = donations;
        console.log(donations);
      },
      (error) => console.log(error)
    );
  }
}
