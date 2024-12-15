import { Injectable } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BalanceResponse } from '../models/home/balanceResponse';

@Injectable({
  providedIn: 'root'
})
export class ChartConfigService {

  getBarChartConfig(data: BalanceResponse): ChartConfiguration {
    return {
      type: 'bar',
      data: {
        labels: ['Receitas', 'Despesas'],
        datasets: [
          {
            data: [data.totalIncomes, data.totalExpenses],
            backgroundColor: ['#4caf50', '#f44336'],
            borderColor: ['#388e3c', '#d32f2f'],
            borderWidth: 1,
            barThickness: 50
          }
        ]
      },
      options: {
        
        responsive: true,
        plugins: {
          legend: { 
            display: false,
            labels: {
              font: {
                family: 'Arial Black',
                weight: 'normal'
              }
            }
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (context) {
                const value = context.raw as number;
                const formattedValue = value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                return `R$ ${formattedValue}`;
              }
            }
          }
        },
        layout: {
          padding: {
            top: 0,
            bottom: 0,
            left: 20,
            right: 20
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              font: {
                family: 'Arial Black',
                 weight: 'bold',
                },
                color: '#245426'
              },
            border: {
              color: '#4CAF50 ',
              width: 2
            },
          },
          y: {
            beginAtZero: true,
            grid: { display: false },
            ticks: {
              font: {
                family: 'Arial Black',
                 weight: 'bold' 
                },
                color: '#245426'
            },
            border: {
              color: '#4CAF50',
              width: 2
            },
          },
        }
      }
    };
  }
}
