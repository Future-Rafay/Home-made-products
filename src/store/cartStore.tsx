import { create } from "zustand";

interface CartItem {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (_id: string) => void;
    increaseQuantity: (_id: string) => void;
    decreaseQuantity: (_id: string) => void;
    clearCart: () => void;
    totalPrice: number;
}

export const useCartStore = create<CartStore>((set) => ({
    items: [],
    addItem: (item) => set((state) => ({
        items: [...state.items, item],
    })),
    removeItem: (_id) => set((state) => ({
        items: state.items.filter((item) => item._id !== _id),
    })),
    increaseQuantity: (_id) => set((state) => ({
        items: state.items.map((item) =>
            item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
        ),
    })),
    decreaseQuantity: (_id) => set((state) => ({
        items: state.items.map((item) =>
            item._id === _id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ),
    })),


    clearCart: () => set({ items: [] }),
    totalPrice: 0,




}));
