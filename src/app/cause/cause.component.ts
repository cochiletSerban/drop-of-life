import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';
import { Renderer3 } from '@angular/core/src/render3/renderer';


@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.scss']
})
export class CauseComponent implements OnInit, AfterViewInit {
  modalActions = new EventEmitter<string|MaterializeAction>();
  procent = 0;
  @ViewChild('blood') blood: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {

  }


  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }


  ngAfterViewInit() {
    let timeleft = 0;

    const downloadTimer = setInterval(() => {
      this.procent += timeleft;
      this.procent = this.procent / 10;
      timeleft++;
      if (timeleft > 10) {
        timeleft = 0;
        this.procent = 0;
      }
    }, 1000);
  }

}
