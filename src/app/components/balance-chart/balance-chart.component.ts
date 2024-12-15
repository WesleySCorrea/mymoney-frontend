import { Component, OnInit } from '@angular/core';
import { BalanceResponse } from '../../models/home/balanceResponse';
import { HomeService } from '../../services/home/home.service';
import { Chart, registerables } from 'chart.js';
import { ChartConfigService } from '../../config/ChartConfigService';
import { DataUtilService } from '../../models/home/dateUtilService';

@Component({
  selector: 'app-balance-chart',
  templateUrl: './balance-chart.component.html',
  styleUrl: './balance-chart.component.scss'
})
export class BalanceChartComponent implements OnInit {
  balanceData: BalanceResponse | null = null;
  chart: any;
  monthSelect: number = new Date().getMonth() + 1;
  selectedYear: number = new Date().getFullYear();

  months: string[] = [];
  years: number[] = [new Date().getFullYear()];

  constructor(
    private homeService: HomeService,
    private chartConfigService: ChartConfigService,
    private dataUtilService: DataUtilService
  ) {}

  ngOnInit(): void {
    this.months = this.dataUtilService.getMonths()
    this.fetchBalanceData();
  }
  
  onDateChange(): void {
    this.fetchBalanceData();
  }
  
  private fetchBalanceData(): void {
    this.homeService.getBalanceData(this.monthSelect, this.selectedYear)
      .subscribe(data => {
        this.balanceData = data;
        this.years = data.years;
  
        this.createChart(data);
      });
  }

  private createChart(data: BalanceResponse): void {
    const ctx = document.getElementById('balanceChart') as HTMLCanvasElement;

    if (ctx) {
      const chartConfig = this.chartConfigService.getBarChartConfig(data);

      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = new Chart(ctx, chartConfig);
    }
  }
}

