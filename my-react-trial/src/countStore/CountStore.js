import {create} from "zustand";

export const useCountStore = create((set) => ({
    count2: 0,
    decrease: () => set((state)=>({count2: state.count2 - 1})),
    increase: () => set((state) => ({count2: state.count2 + 1}))
}));


