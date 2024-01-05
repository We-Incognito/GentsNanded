import React from "react";
import { FaRegHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/Images/logo-wn.jpg";

const Header = () => {
  return (
      <div className="cx-header">
      <Navbar expand="lg" className="bg-dark">
        <Container className="d-flex ms-2">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="img-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav ms-2" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="nav-link m-2">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">All Products</Nav.Link>
              <Nav.Link href="#home">Category</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
            <div className="righ-header">
              <button className="icon-btn">
                <FaSearch />
              </button>
              <button className="icon-btn">
                <FaRegHeart />
              </button>
              <button className="icon-btn">
                <FaShoppingCart />
              </button>
              <button className="btn btn-danger">Logout</button>
            </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
