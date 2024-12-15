import { Component, OnInit } from '@angular/core';
import { DataUtilService } from '../../models/home/dateUtilService';

@Component({
  selector: 'app-category-chart',
  templateUrl: './category-chart.component.html',
  styleUrl: './category-chart.component.scss'
})
export class CategoryChartComponent implements OnInit{
  monthSelect: number = new Date().getMonth() + 1;
  selectedYear: number = new Date().getFullYear();

  months: string[] = [];
  years: number[] = [new Date().getFullYear()];

  constructor(
    private dataUtilService: DataUtilService
  ) {}

  ngOnInit(): void {
    this.months = this.dataUtilService.getMonths();
  }

  onDateChange(): void {
  }
}
