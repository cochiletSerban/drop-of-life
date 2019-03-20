import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-add-log-modal',
  templateUrl: './add-log-modal.component.html',
  styleUrls: ['./add-log-modal.component.scss']
})
export class AddLogModalComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();
  logForm =  new FormGroup({
    logTitle: new FormControl('', Validators.required),
    logContent: new FormControl('', Validators.required),
    logTags: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  addEntry() {
    if (this.logForm.valid) {
      console.log(this.logForm.get('logTitle').value);
    }
  }

  get isContentValid() {
    return this.logForm.get('logContent').valid;
  }

  get isTitleValid() {
    return this.logForm.get('logTitle').valid;
  }

  get isTittleTouched() {
    return this.logForm.get('logTitle').touched;
  }

  get isContentTouched() {
    return this.logForm.get('logContent').touched;
  }
  get isTagsTouched() {
    return this.logForm.get('logTags').touched;
  }

}
