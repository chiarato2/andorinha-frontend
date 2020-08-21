import { Component, OnInit } from '@angular/core';
import { CustomizerService } from '../../services/customizer.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  public toggle;

  constructor(public customize: CustomizerService) { }
  openToggle: boolean;

  receiveToggle($event) {
    this.openToggle = $event;
    this.toggle = this.openToggle;
  }

  ngOnInit() {
  }

}
