import { Card } from "react-bootstrap"

type BookProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function Book({id, name, price, imgUrl}: BookProps) {
    return (
        <Card>
            <Card.Img
                variant="left"
                src={imgUrl}
                width="200px"
                height="300px"
                style={{objectFit: "cover"}}
            />
        </Card>
    )
}