import { createInitialGameState } from "../state/initialState";
import type { GameState, GameTime, CompanyState } from "../state/types";

type TestStateOverrides = Partial<Omit<GameState, "time" | "company">> & {
  time?: Partial<GameTime>;
  company?: Partial<CompanyState>;
};

export function createTestState(overrides: TestStateOverrides = {}): GameState {
  const base = createInitialGameState();
  
  return {
    ...base,
    ...overrides,
    time: {
      ...base.time,
      ...(overrides.time || {}),
    },
    company: {
      ...base.company,
      ...(overrides.company || {}),
    },
    activeProject: overrides.activeProject !== undefined ? overrides.activeProject : base.activeProject,
    completedProjects: overrides.completedProjects || base.completedProjects,
    eventsSeen: overrides.eventsSeen || base.eventsSeen,
    flags: {
      ...base.flags,
      ...(overrides.flags || {}),
    },
  };
}
