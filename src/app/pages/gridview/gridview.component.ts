import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {
  public childata
 public nodata;
  constructor() { }

  ngOnInit(): void {
  }
  getdata(event)
  {
    this.childata=event;
  }
  getnodata(event)
  {
    this.nodata=event;
    console.log(this.nodata);

  }
}
