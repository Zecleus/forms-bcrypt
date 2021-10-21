import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-print',
  templateUrl: './template-print.component.html',
  styleUrls: ['./template-print.component.css']
})
export class TemplatePrintComponent implements OnInit {

  @Input() firstName = ""; 
  @Input() lastName = "";
  @Input() age = 0;
  @Input() email = "";
  @Input() password = "";

  constructor() { }

  ngOnInit(): void {
  }

}
