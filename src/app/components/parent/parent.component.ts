import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  name: string = "Muhammad Awais";
  age: number = 25;

  constructor() { }

  ngOnInit(): void {
  }

  // coming from child
  onDataFromChild(event: any) {
    console.log(event);
  }

}
