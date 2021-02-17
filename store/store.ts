import create from "zustand";
import type firebase from "firebase";

type State = {
  user: firebase.User | null;
  setUser: (u: firebase.User) => void;
};

export const useStore = create<State>((set) => ({
  user: null,
  setUser: (u: firebase.User) => set(() => ({ user: u })),
}));
