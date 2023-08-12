import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeBooks from "../data/books.json"

type CartProps = {
    isOpen: boolean
}

export function Cart({ isOpen }: CartProps) {
    const { closeCart, booksInCart } = useCart()

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={4}>
                    {booksInCart.map(book => (
                        <CartItem key={book.id} {...book} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(
                            booksInCart.reduce((total, cartItem) => {
                                const book = storeBooks.find(book => book.id === cartItem.id);
                                return total + ((book?.price || 0) * cartItem.quantity);
                            }, 0)
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}