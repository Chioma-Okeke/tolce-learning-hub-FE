import { create } from 'zustand'

interface SidebarStore {
  isOpen: boolean
  isTransparent: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  isTransparent: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  makeTransparent: () => set((state) => ({ isTransparent: !state.isOpen })),
}))
