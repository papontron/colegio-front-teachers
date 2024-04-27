import { create } from "zustand";

type State = {
  token: string | null;
};
type Action = {
  setToken: (token: string) => void;
  clearToken: () => void;
};

export const tokenState = create<State & Action>((set) => ({
  token: null,
  setToken: (token) => set(() => ({ token })),
  clearToken: () => set(() => ({ token: null })),
}));
