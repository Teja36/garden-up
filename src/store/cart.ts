import { create } from 'zustand';

type Product = {
    id: number,
    quantity: number,
}

type CartStore = {
    cart: Product[],
    add: (product: Product) => void,
    remove: (productId: number) => void,
    removeAll: () => void,
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    add: (product) => { set((store) => ({ cart: [product, ...store.cart] })) },
    remove: (productId) => set((store) => ({ cart: store.cart.filter(product => product.id !== productId) })),
    removeAll: () => set({ cart: [] }),
}))