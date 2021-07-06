import React, { Component } from 'react'
// import Nav from 'react-bootstrap/Nav'
export class Header extends Component {
    render() {
        return (
        //     <Nav  as="ul">
        //     <Nav.Item as="li">
        //       <Nav.Link href="/">Home</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item as="li">
        //       <Nav.Link eventKey="link-1"  href="/fav">Favoirit</Nav.Link>
        //     </Nav.Item>
        //   </Nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/fav">Favoirit</a></li>

        </ul>
        )
    }
}

export default Header
