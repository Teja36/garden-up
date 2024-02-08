import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Product = {
    id: number,
    quantity: number,
}

type CartStore = {
    cart: Product[],
    add: (product: Product) => void,
    changeQuantity: (productId: number, value: number) => void,
    remove: (productId: number) => void,
    removeAll: () => void,
}

export const useCartStore = create<CartStore>()(persist(
    (set) => ({
        cart: [],
        add: (product) => {
            set((store) => {

                const found = store.cart.find(item => item.id === product.id);

                if (found) {
                    found.quantity++;
                    return { cart: [...store.cart.filter(item => item.id !== product.id), found] }
                }

                return { cart: [...store.cart, product] };
            }
            )
        },
        changeQuantity: (productId, value) => {
            set((store) => {
                return {
                    cart: store.cart.map(item => {
                        if (item.id === productId) {
                            return { ...item, quantity: value }
                        }
                        return item;
                    })
                }
            })
        },
        remove: (productId) => set((store) => ({ cart: store.cart.filter(product => product.id !== productId) })),
        removeAll: () => set({ cart: [] }),
    }),
    {
        name: "garden-up",
    }
))