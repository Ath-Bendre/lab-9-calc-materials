import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extraui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class ExtrauiComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  options = [
    {id:1 , name:'Addition'},
    {id:2 , name:'Substraction'},
    {id:4 , name:'Multiplication'},
    {id:5 , name:'Division'},
    {id:6 , name:'Odd Even'},
    {id:7 , name:'Factorial'},
  ]
}
