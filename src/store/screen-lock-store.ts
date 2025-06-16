import { create } from "zustand";

type LockScreenStore = {
    isLocked: boolean
    toggleLock: () => void
}

export const useLockScreenStore = create<LockScreenStore>((set) => ({
    isLocked: false,
    toggleLock: () => set((state) => ({isLocked: !state.isLocked}))
}))