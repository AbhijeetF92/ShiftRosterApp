import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FortnightService {
  getMonthDates(): string[] {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const timezoneOffset = firstDayOfMonth.getTimezoneOffset();
    const startDate = new Date(firstDayOfMonth.getTime() - timezoneOffset * 60 * 1000);
    const lastDate = new Date(lastDayOfMonth.getTime() - timezoneOffset * 60 * 1000);

    const dates: string[] = [];

    for (let date = startDate; date <= lastDate; date.setDate(date.getDate() + 1)) {
      dates.push(this.formatDate(date));
    }

    return dates;
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}
  

 