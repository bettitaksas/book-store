import { Button, Stack } from "react-bootstrap"
import { useCart } from "../context/CartContext"
import storeBooks from "../data/books.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart} = useCart()
    const book = storeBooks.find(book => book.id === id)
    if (book === null) return null

    return (
        <Stack direction="horizontal" gap={3} className="d-flex
            align-items-center">
            <img src={book?.imgUrl} style={{width: "120px", height: "180px", objectFit: "cover"}} />
            <div className="me-auto">
                <div>
                    {book?.name}
                    {quantity > 1 && 
                        <span
                        className="text-muted" style={{fontSize: ".8rem"}}> x{quantity}
                        </span>}
                </div>
                <div className="text-muted" style={{fontSize: ".9rem"}}>
                    {book && book.price !== undefined ? formatCurrency(book.price) : "Price not available"}
                </div>
                <div>
                    {book && book.price !== undefined ? formatCurrency(book.price * quantity) : "Price not available"}
                </div>
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => book && book.price !== undefined ? removeFromCart(book.id) : "Price not available"}>&times;</Button>
        </Stack>
    )
}