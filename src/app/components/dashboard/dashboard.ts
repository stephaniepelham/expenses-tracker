import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-dashboard',
  imports: [DecimalPipe],
  templateUrl: './dashboard.html'
})
export class DashboardComponent {

  expenseService = inject(ExpenseService);

}