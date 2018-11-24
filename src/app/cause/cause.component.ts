import { Component, OnInit, AfterViewChecked, AfterViewInit, Renderer2, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/renderer';


@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.scss']
})
export class CauseComponent implements OnInit, AfterViewInit {
  
  procent = 0;
  @ViewChild('blood') blood: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    let timeleft = 0;

    const downloadTimer = setInterval(() => {
      console.log(this.blood);
      this.procent += timeleft;
      this.procent = this.procent/10;
      console.log(this.procent);
      
      timeleft++;
      if (timeleft > 10) {
        timeleft = 0;
        this.procent = 0;
      }
    }, 1000);
  }

}
