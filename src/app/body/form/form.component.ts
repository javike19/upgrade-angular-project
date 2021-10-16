import { Component, Input, OnInit } from '@angular/core';
import { Formu } from 'src/app/bbjoda-model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
@Input() public formu!: Formu;
  constructor() { }

  ngOnInit(): void {
  }

}
