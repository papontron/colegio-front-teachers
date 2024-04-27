import { create } from "zustand";

export const NivelesSelect = [
  { label: "primaria", value: "primaria" },
  { label: "inicial", value: "inicial" },
];
export type Nivel = "inicial" | "primaria";

type State = {
  nivel: Nivel | null;
};
type Action = {
  setNivel: (nivel: Nivel) => void;
  resetNivel: () => void;
};

export const nivelState = create<State & Action>((set) => ({
  nivel: null,
  setNivel: (nivel) => set(() => ({ nivel })),
  resetNivel: () => set(() => ({ nivel: null })),
}));
