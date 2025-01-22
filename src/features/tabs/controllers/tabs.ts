import {atom} from 'jotai';

// Состояния
export const countAtom = atom(0);
export const messageAtom = atom('Hello, Jotai!');

// Методы
export const incrementCountAtom = atom(
  get => get(countAtom),
  (get, set) => set(countAtom, get(countAtom) + 1),
);

export const updateMessageAtom = atom(
  get => get(messageAtom),
  (get, set, newMessage: string) => set(messageAtom, newMessage),
);
