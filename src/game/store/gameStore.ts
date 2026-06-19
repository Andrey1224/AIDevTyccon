import { create } from "zustand";
import { createInitialGameState } from "../state/initialState";
import type { GameState } from "../state/types";
import { advanceWeek } from "../systems/timeSystem";

type GameStore = {
  state: GameState;
  resetGame: () => void;
  tick: () => void;
};

export const useGameStore = create<GameStore>((set, get) => ({
  state: createInitialGameState(),

  resetGame: () => {
    set({
      state: createInitialGameState(),
    });
  },

  tick: () => {
    const current = get().state;
    const next = advanceWeek(current);

    set({
      state: next,
    });
  },
}));
