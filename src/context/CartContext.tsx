import { createContext, ReactNode, useContext, useState } from "react"

type CartProviderProps = {
    children: ReactNode
}

type bookInCart = {
    id: number,
    quantity: number
}

type CartContext = {
    getBookQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const CartContext = createContext({} as CartContext)

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
    const [booksInCart, setBooksInCart] = useState<bookInCart[]>([])
    
    function getBookQuantity(id: number){
        return booksInCart.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setBooksInCart(currentBooks => {
            if (currentBooks.find(book => book.id === id) == null){
                return [...currentBooks, {id, quantity: 1}]
            } else {
                return currentBooks.map(book => {
                    if (book.id === id) {
                        return {...book, quantity:  book.quantity+1}
                    } else {
                        return book
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setBooksInCart(currentBooks => {
            if (currentBooks.find(book => book.id === id)?.quantity === 1){
                return currentBooks.filter(book => book.id !== id)
            } else {
                return currentBooks.map(book => {
                    if (book.id === id) {
                        return {...book, quantity:  book.quantity-1}
                    } else {
                        return book
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setBooksInCart(currentBooks => {
            return currentBooks.filter(book => book.id !== id)
        })
    }
    
    return (
        <CartContext.Provider value={{getBookQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}