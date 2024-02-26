import { create } from "zustand";

type happyStoresStateType = {
  happiness: number;
  happinessUp: () => void;
  showHappiness: () => void;
};

const useHappyStore = create<happyStoresStateType>()((set, get) => ({
  happiness: 0,
  happinessUp: () =>
    set((state) => ({
      happiness: state.happiness + 1,
    })),
  showHappiness: () => {
    alert(`Current happiness:${get().happiness}`);
  },
}));

export { useHappyStore };
