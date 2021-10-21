import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reactive-print',
  templateUrl: './reactive-print.component.html',
  styleUrls: ['./reactive-print.component.css']
})
export class ReactivePrintComponent implements OnInit {

  @Input() companyName = "";
  @Input() positionName = "";
  @Input() salary = 0;
  @Input() cityAddress = "";
  @Input() contactNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
