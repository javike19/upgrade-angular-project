import { Form } from "@angular/forms";

export interface BbjodaModel {
    body: Body;
}

export interface Body {
    nav: Nav;
    intro: Intro;
    product: Product;
    formu: Formu;
}

export interface Nav{
    title: string;
    logo: Img;
    user: string;
    imgUser: Img;
}

export interface Img{
    src: string;
    alt: string;
}

export interface Intro{
    title: string;
    info: string;
}

export interface Product{
    imgProduct: Img;
    btn: string;
}

export interface Formu {
    name: string;
    email: string;
    country: string;
    visa: string;
    btn: string;
}
