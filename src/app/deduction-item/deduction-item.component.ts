import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeductionStatus } from '../models/deductionStatus.enum';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-deduction-item',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './deduction-item.component.html',
  styleUrl: './deduction-item.component.scss',
})
export class DeductionItemComponent {
  constructor() {}
  statuses = [
    {
      value: DeductionStatus.NotSeen,
      viewValue: 'Not Seen',
    },
    { value: DeductionStatus.Possible, viewValue: 'Possible' },
    { value: DeductionStatus.RuledOut, viewValue: 'Ruled Out' },
  ];

  @Input({
    required: true,
  })
  currentStatus: DeductionStatus = DeductionStatus.NotSeen;

  @Input({
    required: true,
  })
  name!: string;

  @Input({
    required: true,
  })
  category!: 'Suspects' | 'Weapons' | 'Locations';

  @Output() statusUpdate = new EventEmitter<{
    itemName: string;
    itemCategory: 'Suspects' | 'Weapons' | 'Locations';
    newStatus: DeductionStatus;
  }>();

  selectionChange(event: any) {
    console.log(event);
    this.statusUpdate.emit({
      itemName: this.name,
      itemCategory: this.category,
      newStatus: event.value,
    });
  }
}
