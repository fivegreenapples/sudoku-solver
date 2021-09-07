import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { CellData } from '../grid/grid.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() data: CellData[] = [];
  @Output() clicked = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  public onClick(cell: number) {
    this.clicked.emit(cell);
  }
}
