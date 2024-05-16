import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ClueStorageService } from './services/clue-storage.service';
import { gameObject } from './models/gameObject.interface';
import { CommonModule } from '@angular/common';
import { DeductionItemComponent } from './deduction-item/deduction-item.component';
import { DeductionStatus } from './models/deductionStatus.enum';
import { ItemCategories } from './models/deductionItems.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    CommonModule,
    MatCardModule,
    DeductionItemComponent,
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Get-A-Clue';

  gameState: gameObject = {
    Weapons: [],
    Locations: [],
    Suspects: [],
  };
  constructor(private _clueStorageService: ClueStorageService) {}

  ngOnInit(): void {
    this._clueStorageService.initStorage();
    console.log(this.gameState);
    this.gameState = this._clueStorageService.getClueState();
  }

  ngAfterViewInit(): void {}

  onStatusUpdate(
    itemName: string,
    itemCategory: 'Suspects' | 'Weapons' | 'Locations',
    status: DeductionStatus
  ) {
    console.log(
      `Status of ${itemCategory} new status of ${itemName} is ${status}`
    );

    console.log('gameState' + this.gameState);
    console.log('storage' + this._clueStorageService);
    this._clueStorageService.updateItem(itemName, itemCategory, status);
  }
}
