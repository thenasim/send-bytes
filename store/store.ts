import create from "zustand";
import { data } from "../data/ChatData";
import { ChatStateType } from "../types";

type State = {
  username: string;
  setUsername: (u: string) => void;
  chatlists: ChatStateType[];
  selectedChat: ChatStateType | undefined;
  setSelectedChat: (u: ChatStateType) => void;
};

export const useStore = create<State>((set) => ({
  username: "",
  setUsername: (u: string) => set(() => ({ username: u })),
  chatlists: data,
  selectedChat: undefined,
  setSelectedChat: (c: ChatStateType) => set(() => ({ selectedChat: c })),
}));
