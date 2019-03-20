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
  name: string;
  constructor() { }

  ngOnInit() {
    $('.tabs').tabs();
    this.name = localStorage.getItem('username');
  }
}

