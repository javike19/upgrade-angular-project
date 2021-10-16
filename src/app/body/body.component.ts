import { Component, OnInit } from '@angular/core';
import { BbjodaModel } from '../bbjoda-model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  public bbjodamodel: BbjodaModel;


  constructor() {
    this.bbjodamodel = {
      body: {
        nav:{
          title: 'Baby Yoda Shop',
          logo: {
            src: '../assets/logo.png',
            alt: 'logo baby yoda shop',
          },
          user: 'user',
          imgUser: {
            src: '../assets/user.png',
            alt: 'user',
          },
        },
        intro:{
          title: 'The most realistic Baby Joda´s pet',
          info: 'This 11-inch Grogu plush toy will capture the hearts of Star Wars fans everywhere! Inspired by the Disney+ series, The Mandalorian, the adorable Grogu character with green skin, big ears and large eyes looks like a "Baby Yoda" but is called The Child.',
        },
        product:{
          imgProduct: {
            src: '../assets/bbyodaproduct.png',
            alt: 'baby yoda product',
          },
          btn: '299,99 € BUY!',
        },
        formu:{
          name: 'string',
          email: 'string',
          country: 'string',
          visa: 'string',
          btn: 'string',
        },
      }
    }
  }

  ngOnInit(): void {
  }

}
