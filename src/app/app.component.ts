import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ClueStorageService } from './services/clue-storage.service';
import { gameObject } from './models/gameObject.interface';
import { CommonModule } from '@angular/common';
import { DeductionItemComponent } from './deduction-item/deduction-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { DeductionStatus } from './models/deductionStatus.enum';
import { Observable } from 'rxjs';

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
    MatListModule,
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Get-A-Clue';
  categories: Array<'Locations' | 'Weapons' | 'Suspects'> = [
    'Locations',
    'Weapons',
    'Suspects',
  ];
  gameState$:Observable<gameObject>;
  
  constructor(private _clueStorageService: ClueStorageService) {
    this.gameState$ = this._clueStorageService.getClueState();
  }
  
  ngOnInit(): void {
    this._clueStorageService.initStorage();
  }

  resetCard() {
    this._clueStorageService.resetStorage();
  }

  ngAfterViewInit(): void {}

  onStatusUpdate(event: any) {
    this._clueStorageService.updateItem(
      event.itemName,
      event.itemCategory,
      event.newStatus
    );
  }
}
