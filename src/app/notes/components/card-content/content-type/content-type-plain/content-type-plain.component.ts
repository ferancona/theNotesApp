import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-type-plain',
  templateUrl: './content-type-plain.component.html',
  styles: [
  ]
})
export class ContentTypePlainComponent implements OnInit {

  content: string = '';
  splitContent: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.splitContent = this.content.split('\n')
  }

}
