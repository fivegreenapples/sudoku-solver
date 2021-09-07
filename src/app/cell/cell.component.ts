import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { CellData } from '../grid/grid.component';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() data: CellData;
  @Output() clicked = new EventEmitter<null>();
  constructor() {
    this.data = {
      value: 0,
      candidates: [],
      options: [],
      selected: false,
    };
  }

  ngOnInit(): void {}

  public onClick() {
    this.clicked.emit();
  }
}
