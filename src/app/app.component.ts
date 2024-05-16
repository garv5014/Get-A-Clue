import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ClueStorageService } from './services/clue-storage.service';
import { gameObject } from './models/gameObject.interface';
import { CommonModule } from '@angular/common';
import { DeductionItemComponent } from './deduction-item/deduction-item.component';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule,
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Get-A-Clue';
  categories: Array<'Locations' | 'Weapons' | 'Suspects'> = [
    'Locations',
    'Weapons',
    'Suspects',
  ];
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

  resetCard() {
    this._clueStorageService.resetStorage();
    this.gameState = this._clueStorageService.getClueState();
  }

  ngAfterViewInit(): void {}

  onStatusUpdate(event: any) {
    console.log(event);
    console.log(
      `Status of ${event.itemCategory} new status of ${event.itemName} is ${event.newStatus}`
    );
    this.gameState['Locations'];

    console.log('gameState' + this.gameState);
    console.log('storage' + this._clueStorageService);
    this._clueStorageService.updateItem(
      event.itemName,
      event.itemCategory,
      event.newStatus
    );
  }
}
