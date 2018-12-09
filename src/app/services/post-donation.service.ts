import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { DonationResponse } from '../objects/donationResponse';

@Injectable()
export class PostDonationService {
    constructor(private http: HttpClient) {}

    postDonation(donationRequest) {
        return this.http.post<DonationResponse>('http://shielded-hollows-19820.herokuapp.com/add_donation', donationRequest);
    }
  }