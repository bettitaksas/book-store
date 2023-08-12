import { Offcanvas } from "react-bootstrap";

export function Cart() {
  return (
    <Offcanvas show={true} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
}