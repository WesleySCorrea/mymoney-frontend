import { Component, OnInit } from '@angular/core';
import { BalanceResponse } from '../../models/home/balanceResponse';
import { HomeService } from '../../services/home/home.service';
import { Chart, registerables } from 'chart.js';
import { ChartConfigService } from '../../config/ChartConfigService';

@Component({
  selector: 'app-balance-chart',
  templateUrl: './balance-chart.component.html',
  styleUrl: './balance-chart.component.scss'
})
export class BalanceChartComponent implements OnInit {
  balanceData: BalanceResponse | null = null;
  chart: any;

  constructor(
    private homeService: HomeService,
    private chartConfigService: ChartConfigService
  ) {}

  ngOnInit(): void {
    this.homeService.getBalanceData().subscribe(data => {
      this.balanceData = data;

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

