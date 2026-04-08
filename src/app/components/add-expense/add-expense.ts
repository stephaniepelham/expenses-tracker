import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../services/expense-service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-expense',
  imports: [FormsModule],
  templateUrl: './add-expense.html'
})
export class AddExpenseComponent {

  expenseService = inject(ExpenseService);

  title = '';
  amount = 0;
  category = '';

  addExpense() {
    if (!this.title || !this.amount || !this.category) return;

    this.expenseService.addExpense({
      id: crypto.randomUUID(),
      title: this.title,
      amount: this.amount,
      category: this.category as any
    });

    this.title = '';
    this.amount = 0;
    this.category = '';
  }
}