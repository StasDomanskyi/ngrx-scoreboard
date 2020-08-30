import { INITIAL_STATE } from "@ngrx/store";
import { IGame } from './IGame';

export interface IState {
  game: IGame;
}