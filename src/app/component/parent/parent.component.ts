import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Output() msgToSibling = new EventEmitter<any>();
  @Input() parentdata;

  parentData: any;
  mySelect:any;
  nodata: any;
  constructor(public genericservice:GenericService) { }

  ngOnInit(): void {
    this.genericservice.getparentJson().subscribe(data=>{
      this.parentData=data;
    })
    console.log(this.parentdata);

  }

  ngDoCheck()
  {
    this.nodata=this.parentdata;

  }

  selectChange(e)
  {

    this.msgToSibling.emit(e.target.value);

  }
}
