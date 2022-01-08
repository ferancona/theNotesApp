import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import {  } from 'stream';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styles: [
  ]
})
export class CardMenuComponent implements OnInit {

  @Output() onDelete: EventEmitter<void> = new EventEmitter();
  @Output() onDuplicate: EventEmitter<void> = new EventEmitter();
  @Output() onAttach: EventEmitter<void> = new EventEmitter();
  @Output() onShare: EventEmitter<void> = new EventEmitter();

  @Input() shared: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  duplicateTrigger() {
    this.onDuplicate.emit();
  }

  attachFileTrigger() {
    this.onAttach.emit();
  }

  shareTrigger() {
    this.onShare.emit();
  }

  deleteTrigger() {
    this.onDelete.emit();
  }

}
