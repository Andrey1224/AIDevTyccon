export type GameTime = {
  year: number;
  month: number;
  week: number;
};

export type CompanyState = {
  name: string;
  cash: number;
  publicTrust: number;
  teamMorale: number;
  regulatoryHeat: number;
  researchScore: number;
};

export type LlmProjectPhase =
  | "architecture"
  | "training"
  | "alignment"
  | "deployment"
  | "completed";

export type LlmProject = {
  id: string;
  name: string;
  phase: LlmProjectPhase;
  progress: number;
  capabilityPoints: number;
  safetyPoints: number;
  speedPoints: number;
  costEfficiencyPoints: number;
};

export type GameState = {
  time: GameTime;
  company: CompanyState;
  activeProject: LlmProject | null;
  completedProjects: LlmProject[];
  eventsSeen: string[];
  flags: Record<string, boolean>;
};

export type SaveFile = {
  version: number;
  createdAt: string;
  updatedAt: string;
  gameState: GameState;
};
