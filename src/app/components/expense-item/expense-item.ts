import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-expense-item',
  imports: [CommonModule],
  templateUrl: './expense-item.html'
})
export class ExpenseItemComponent {

  @Input() expense!: Expense;

  expenseService = inject(ExpenseService);

  delete() {
    this.expenseService.deleteExpense(this.expense.id);
  }
}