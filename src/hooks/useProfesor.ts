import { create } from "zustand";
import { Grado, Seccion } from "../types/gradoSalon";
export type SalonProfesor = {
  tutor: boolean;
  label: string;
  value: { grado: Grado; seccion: Seccion };
  order: number;
  cursos: { label: string; key: string }[];
};
export type Profesor = {
  nombres: string;
  apellidos: string;
  dni: number;
  salones: SalonProfesor[];
  telefono?: number;
  rol: "profesor";
  userId: string;
  _id: string;
};
type State = {
  profesor: Profesor | null;
};
type Action = {
  setProfesor: (profesor: Profesor) => void;
  clearProfesor: () => void;
};
export const useProfesor = create<State & Action>((set) => ({
  profesor: null,

  setProfesor: (profesor) => set(() => ({ profesor: profesor })),
  clearProfesor: () => set({ profesor: null }),
}));
