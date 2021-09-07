import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  public data: CellData[];
  public boxes: CellData[][];

  constructor(private route: ActivatedRoute) {
    this.data = [];
    this.boxes = [];

    for (let b = 0; b < 9; b++) {
      let box: CellData[] = [];
      for (let c = 0; c < 9; c++) {
        const cell = {
          // value: c + 1,
          candidates: [],
          options: [],
          selected: false,
        };
        this.data.push(cell);
        box.push(cell);
      }
      this.boxes.push(box);
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.has('state')) {
        const state = params.get('state')!;
        [...state].forEach((val, idx) => {
          if (val.match(/[1-9]/)) {
            this.data[idx].value = parseInt(val, 10);
          }
        });
      }
    });
  }

  public onClick(box: number, cell: number) {
    const id = box * 9 + cell;
    for (let c = 0; c < 81; c++) {
      if (c == id) continue;
      this.data[c].selected = false;
    }
    this.data[id].selected = !this.data[id].selected;
  }
}

export interface CellData {
  value?: number;
  candidates: number[];
  options: number[];
  selected: boolean;
}
