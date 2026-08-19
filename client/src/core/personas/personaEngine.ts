export interface Persona {
  id: string;
  name: string;
  handle: string;
  avatar?: string;
  description: string;
  traits: string[];
}

export interface BehaviorOutput {
  action: string;
  content: string;
  timestamp: number;
  metadata: { personaId: string };
}

/**
 * AI persona data is intentionally empty until a verified backend integration
 * is available. The UI can render this boundary without implying that
 * synthetic users or autonomous world activity are live.
 */
export const SEED_PERSONAS: readonly Persona[] = [];

const behaviorLog: BehaviorOutput[] = [];

export const personaEngine = {
  createPersona: (name: string, description: string): Persona => ({
    id: crypto.randomUUID(),
    name,
    handle: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    description,
    traits: [],
  }),

  updatePersona: (persona: Persona, updates: Partial<Persona>): Persona => ({
    ...persona,
    ...updates,
  }),

  deletePersona: (_id: string): boolean => false,

  tick: (_topics: readonly string[]): readonly BehaviorOutput[] => [],

  getBehaviorLog: (limit = 30): readonly BehaviorOutput[] => behaviorLog.slice(-limit),
};
