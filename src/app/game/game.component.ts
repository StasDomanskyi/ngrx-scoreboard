import { Component, OnInit, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ScoreboardPageActions from '../store/scoreboard-page.actions';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IState } from '../store/IState';
import * as Selectors from '../store/scoreboard.selectors';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameForm;
  home$: Observable<number>;
  away$: Observable<number>;

  constructor(private store: Store<{home: number, away: number}>) { 
    this.gameForm = new FormGroup({
      home: new FormControl('1'),
      away: new FormControl('1'),
    });
  }

  ngOnInit() {
    this.home$ = this.store.pipe(select(Selectors.selectHome));
    this.away$ = this.store.pipe(select(Selectors.selectAway));
  }

  setHomeScore() {
    this.store.dispatch(ScoreboardPageActions.homeScore());
  }

  setAwayScore() {
    this.store.dispatch(ScoreboardPageActions.awayScore());
  }

  resetScore() {
    this.store.dispatch(ScoreboardPageActions.resetScore());
  }

  setGame() {
    this.store.dispatch(ScoreboardPageActions.setScores({
      game: {
        home: this.gameForm.controls.home.value,
        away: this.gameForm.controls.away.value,
      },
    }));
  }

}
