import type { GameState } from "./types";

export function createInitialGameState(companyName = "OpenMind"): GameState {
  return {
    time: {
      year: 1,
      month: 1,
      week: 1,
    },

    company: {
      name: companyName,
      cash: 100_000,
      publicTrust: 60,
      teamMorale: 70,
      regulatoryHeat: 10,
      researchScore: 0,
    },

    activeProject: null,
    completedProjects: [],
    eventsSeen: [],
    flags: {},
  };
}
