import { Component, Input, OnInit } from '@angular/core';
import { Intro } from 'src/app/bbjoda-model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
@Input() public intro!: Intro;
  constructor() { }

  ngOnInit(): void {
  }

}
