import { createSelector } from '@ngrx/store';

const selectGame = (state) => state.game;
export const selectHome = createSelector(
  selectGame,
  (state) => state.home
);
export const selectAway = createSelector(
  selectGame,
  (state) => state.away
);