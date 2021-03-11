import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Expense } from '../expense.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputReason = new FormControl('');
  inputAmount = new FormControl('');
  expenses:Expense[] = [
    {expenseReason: 'Food', expenseAmount: 12.99},
    {expenseReason: 'Play game', expenseAmount: 16.99},
    {expenseReason: 'Drink', expenseAmount: 19.50},
    {expenseReason: 'Bus', expenseAmount: 8.35},
    {expenseReason: 'wimming pool', expenseAmount: 5.99},
  ];

  constructor() {}

  onConfirmClick() {
    if (this.inputReason.value.trim().length > 0 && this.inputAmount.value > 0) {
      console.log('>>>', this.inputReason.value, this.inputAmount.value);
      this.expenses.push(new Expense(this.inputReason.value, this.inputAmount.value));
      this.clearInputs();
    }

  }

  private clearInputs() {
    this.inputReason.setValue('');
    this.inputAmount.setValue('');
  }

  onCancelClick() {
    this.clearInputs();
  }

  getSum(): number {
    let sum = 0;
    this.expenses.forEach(item => sum += item.expenseAmount);
    return sum;
  }
}
