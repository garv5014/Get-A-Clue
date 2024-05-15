import { Component, Input } from '@angular/core';
import { DeductionStatus } from '../models/deductionStatus.enum';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-deduction-item',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './deduction-item.component.html',
  styleUrl: './deduction-item.component.scss',
})
export class DeductionItemComponent {
  constructor() {}

  @Input({
    required: true,
  })
  currentStatus: DeductionStatus = DeductionStatus.Unmarked;

  @Input({
    required: true,
  })
  updateStatus!: (newStatus: DeductionStatus) => void;
}
