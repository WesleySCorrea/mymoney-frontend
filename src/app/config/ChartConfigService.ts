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
            backgroundColor: ['#4caf50', '#f44336'], // Cores para as barras
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
                family: 'Arial Black', // Fonte para as legendas
                weight: 'normal'
              }
            }
          },
          tooltip: { enabled: true }
        },
        layout: {
          padding: {
            top: 0,  // Ajuste o espaço superior do gráfico
            bottom: 20, // Ajuste o espaço inferior do gráfico
            left: 20,   // Ajuste o espaço à esquerda
            right: 20   // Ajuste o espaço à direita
          }
        },
        scales: {
          x: {
            grid: { display: false }, // Remove linhas de grade no eixo X
            ticks: {
              font: {
                family: 'Arial Black', // Fonte Arial Black para os valores no eixo Y
                 weight: 'bold' 
                } // Negrito no eixo X
            }
          },
          y: {
            beginAtZero: true,
            grid: { display: false },
            ticks: {
              font: {
                family: 'Arial Black', // Fonte Arial Black para os valores no eixo Y
                 weight: 'bold' 
                } // Negrito no eixo Y
            }
          },
        }
      }
    };
  }
}
