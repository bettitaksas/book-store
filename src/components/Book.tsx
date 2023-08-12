import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

type BookProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function Book({ id, name, price, imgUrl }: BookProps) {
    const quantity = 0
    return (
        <Card key={id} className="h-100">
            <Card.Img
                className="mx-auto my-4"
                src={imgUrl}
                width="200px"
                height="300px"
                style={{width: "200px", height: "300px"}}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex
                    justify-content-between
                    align-items-baseline
                    mb-5">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100">Add To Cart</Button>
                    ) : 
                        <div className="d-flex align-items-center flex-column"
                            style={{gap: ".5rem"}}>
                                <div className="d-flex align-items-center justify-content-center"
                                    style={{gap: ".5rem"}}>
                                    <Button>-</Button> 
                                    <div>
                                    <span className="fs-4">{quantity}</span> in cart
                                    </div>
                                    <Button>+</Button>
                                </div>
                            <Button variant="danger" size="sm">Remove</Button>
                        </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}