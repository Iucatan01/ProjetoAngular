import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() title: string = "";
  @Input() description: string = "";
  @Input() img: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
