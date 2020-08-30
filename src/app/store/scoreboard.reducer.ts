import { Action, createReducer, on, State } from '@ngrx/store';
import { initialState } from './state';
import * as ScoreboardPageActions from './scoreboard-page.actions';
import { IState } from './IState';
import { IGame } from './IGame';

const initState: IState = {
  game: {
    home: 0,
    away: 0,
  }
};

const _scoreboardReducer = createReducer(
  initState.game,
  on(ScoreboardPageActions.homeScore, (state) => ({ ...state, home: state.home + 1 })),
  on(ScoreboardPageActions.awayScore, (state) => ({ ...state, away: state.away + 1 })),
  on(ScoreboardPageActions.resetScore, (state) => ({ home: 0, away: 0 })),
  on(ScoreboardPageActions.setScores, (state, { game }) => ({home: game.home, away: game.away})),
);

export function scoreboardReducer(state: IGame, action: Action) {
  return _scoreboardReducer(state, action);
}