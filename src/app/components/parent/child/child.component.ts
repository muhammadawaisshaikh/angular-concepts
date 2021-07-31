import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input('age') age: any;
  @Output() getData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.age);
  }

  sendData() {
    this.getData.emit('emitted data from child');
  }

}
