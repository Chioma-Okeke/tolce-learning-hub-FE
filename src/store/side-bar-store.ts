import { create } from 'zustand'

interface SidebarStore {
  isOpen: boolean
  isTransparent: boolean
  open: () => void
  close: () => void
  toggle: () => void
  makeTransparent: (val: boolean) => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  isTransparent: true,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  makeTransparent: (val) => set(() => ({ isTransparent: val })),
}))
