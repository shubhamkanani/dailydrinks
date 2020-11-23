import React from 'react'
import { Nav, Navbar, Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
function Header() {
    const history = useHistory();
    return (
        <Navbar bg="light" expand="lg" className="p-3">
            <Navbar.Brand className="ml-5"><b><i className="fa fa-glass" aria-hidden="true"></i> Daily Drink</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
            <Form inline>
                <Button className="mr-sm-4" variant="outline-success" onClick={()=>{history.push('/order')}}>Place Order</Button>
            </Form>
        </Navbar>
    )
}

export default Header