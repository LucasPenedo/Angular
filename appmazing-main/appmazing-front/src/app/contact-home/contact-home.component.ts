import { Component } from '@angular/core';

export interface Contact{
  id: number;
  name: string;
  surname1: string;
  surname2: string;
  phone: string;
  email: string;
}

const ELEMENT_DATA: Contact[] = [
  {id: 1, name: 'Lucas', surname1: 'Penedo', surname2: 'Cerqueira',phone: '633500622',email: '09@gmail.com'},
  {id: 2, name: 'Pablo', surname1: 'Lopez', surname2: 'Armando',phone: '654345678',email: '19@gmail.com'},
  {id: 3, name: 'Jose', surname1: 'Armando', surname2: 'Francisco',phone: '123456789',email: '29@gmail.com'},
  {id: 4, name: 'Alberto', surname1: 'Francisco', surname2: 'Rey',phone: '987654321',email: '39@gmail.com'},
  {id: 5, name: 'Manolo', surname1: 'Rey', surname2: 'Valverde',phone: '192837465',email: '49@gmail.com'},
  {id: 6, name: 'Luis', surname1: 'Valverde', surname2: 'Marina',phone: '199283746',email: '59@gmail.com'},
  {id: 7, name: 'Moncho', surname1: 'Marina', surname2: 'Pujales',phone: '999888777',email: '69@gmail.com'},
  {id: 8, name: 'David', surname1: 'Pujales', surname2: 'Arias',phone: '666555444',email: '79@gmail.com'},
  {id: 9, name: 'Lucia', surname1: 'Arias', surname2: 'Dominguez',phone: '123454321',email: '89@gmail.com'},
  {id: 10, name: 'Maria', surname1: 'Dominguez', surname2: 'Rodriguez',phone: '192839872',email: '99@gmail.com'},
];

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css'],
})
export class ContactHomeComponent {
  displayedColumns: string[] = ['id', 'name', 'surname1', 'surname2','phone','email'];
  contacts = ELEMENT_DATA;
}
