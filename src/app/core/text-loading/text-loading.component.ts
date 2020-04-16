import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-loading',
  templateUrl: './text-loading.component.html',
  styleUrls: ['./text-loading.component.scss']
})
export class TextLoadingComponent implements OnInit {

  @Input() SectionCount :number;

  arr : number[] = [...Array(1).keys()];

  constructor() {
   }

  ngOnInit() {
    this.arr = [...Array(this.SectionCount).keys()]; 
  }

}
