import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataUtilService {

  private months: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // Método para retornar a lista de meses
  getMonths(): string[] {
    return this.months;
  }
}