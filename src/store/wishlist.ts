import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type WishlistStore = {
    wishlist: number[],
    add: (product: number) => void,
    remove: (productId: number) => void,
    removeAll: () => void,
}

export const useWishlistStore = create<WishlistStore>()(persist(
    (set) => ({
        wishlist: [],
        add: (product) => {
            set((store) => ({ wishlist: [...store.wishlist, product] }))
        },
        remove: (productId) => set((store) => ({ wishlist: store.wishlist.filter(id => id !== productId) })),
        removeAll: () => set({ wishlist: [] }),
    }),
    {
        name: "garden-up-wishlist",
    }
))