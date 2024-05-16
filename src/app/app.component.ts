import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ClueStorageService } from './services/clue-storage.service';
import { gameObject } from './models/gameObject.interface';
import { CommonModule } from '@angular/common';
import { DeductionItemComponent } from './deduction-item/deduction-item.component';
import { DeductionStatus } from './models/deductionStatus.enum';
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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._clueStorageService.initStorage();
    console.log(this.gameState);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.gameState = this._clueStorageService.getClueState();
  }

  test = (t: DeductionStatus) => {
    console.log(t);
  };
}
