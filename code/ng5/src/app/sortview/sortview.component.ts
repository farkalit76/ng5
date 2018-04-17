import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sort, MatSort, MatSortable, MatTableDataSource }  from '@angular/material';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-sortview',
  templateUrl: './sortview.component.html',
  styleUrls: ['./sortview.component.css']
})



export class SortviewComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
    this.sortedData = this.desserts.slice();
  }

  desserts = [
    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},
    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},
  ];

  sortedData;

 
  sortData(sort: Sort) {
    const data = this.desserts.slice();
    //console.log("sorting data:"+data.toString());
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'calories': return this.compare(+a.calories, +b.calories, isAsc);
        case 'fat': return this.compare(+a.fat, +b.fat, isAsc);
        case 'carbs': return this.compare(+a.carbs, +b.carbs, isAsc);
        case 'protein': return this.compare(+a.protein, +b.protein, isAsc);
        default: return 0;
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
