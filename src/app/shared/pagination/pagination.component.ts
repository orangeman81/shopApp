import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  private limit: number = 20;
  public canLoad: boolean = false;
  @Input() length: number;
  @Output() limitCount: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    if (this.length < this.limit) {
      this.canLoad = false;
    }else{
      this.canLoad = true;
    }
  }

  add() {
    this.limit += 20;
    this.limitCount.emit(this.limit);
    if (this.length < this.limit) {
      this.canLoad = false;
    }else{
      this.canLoad = true;
    }
  }

}
