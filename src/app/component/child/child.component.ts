import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() data;
  @Output() msgToparent = new EventEmitter<any>();

  childData: any;
  childDataarray: any;

  constructor(public genericservice: GenericService) { }

  ngOnInit(): void {

  }
  ngOnChanges() {
    console.log("ngonchanges")
    console.log(this.data);

    this.genericservice.getchildJson().subscribe(data => {
      this.childDataarray = data;
      if (this.data != undefined) {
        this.childData = this.childDataarray.filter(
          child => (child.id === this.data)
        );
      }
      if (this.childData != undefined) {
        if (this.childData.length > 0) {
          console.log(this.childData)
          this.msgToparent.emit('');

        }
        else {
          this.msgToparent.emit("Sorry...Your Data is not found...!.Please try with your another selection..:)");
        }
      }

    })
  }
  getfilterdata(user) {
    return Object.keys(user);
  }
  getfilterrowdata(user) {
    return Object.values(user);

  }
}
