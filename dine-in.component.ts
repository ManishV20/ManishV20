import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dine-in',
  templateUrl: './dine-in.component.html',
  styleUrls: ['./dine-in.component.css']
})
export class DineInComponent implements OnInit {

  public numbers = [
    {count:1},
    {count:2},
    {count:3},
    {count:4},
    {count:5},
    {count:6},
    {count:7},
    {count:8},
    {count:9},
    {count:10},
];

  constructor() { 

    
  }

  ngOnInit(): void {
    
  }

}
