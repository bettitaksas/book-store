import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { CartItem } from "./CartItem";

type CartProps = {
    isOpen: boolean
}

export function Cart({isOpen}: CartProps) {
    const {closeCart, booksInCart} = useCart()

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
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}