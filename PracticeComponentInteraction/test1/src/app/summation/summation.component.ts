import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-summation',
  templateUrl: './summation.component.html',
  styleUrls: ['./summation.component.css']
})
export class SummationComponent implements OnInit {
  @Input() n1 :number;
  @Input() n2 :number;
  
  constructor() { }

  ngOnInit() {
  }

}
