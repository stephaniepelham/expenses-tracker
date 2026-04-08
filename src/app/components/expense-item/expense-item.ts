import { Component, Input, inject } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.html'
})
export class ExpenseItemComponent {

  @Input() expense!: Expense;

  expenseService = inject(ExpenseService);

  delete() {
    this.expenseService.deleteExpense(this.expense.id);
  }
}