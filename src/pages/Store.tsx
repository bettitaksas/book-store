import { Col, Row } from "react-bootstrap"
import books from "../data/books.json"
import { Book } from "../components/Book"

export function Store() {
    return (
        <>
            <h1>Store</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {books.map(book => (
                    <Col key={book.id}>
                        <Book {...book} />
                    </Col>
                ))}
            </Row>
        </>
    )
}