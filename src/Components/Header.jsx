import React from "react";
import { FaHeart, FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/Images/logo-small.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="cx-header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" className="img-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav ms-2" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="nav-link">
              <NavLink
                className="link-wrapper"
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "10px",
                  fontWeight: 500,
                }}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="link-wrapper"
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "10px",
                  fontWeight: 500,
                }}
                to="/Mens"
              >
                Mens
              </NavLink>
              <NavLink
                className="link-wrapper"
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "10px",
                  fontWeight: 500,
                }}
                to="/Kids"
              >
                Kids
              </NavLink>
              <NavLink
                className="link-wrapper"
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "10px",
                  fontWeight: 500,
                }}
                to="/About"
              >
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <div className="right-header">
            <button
              style={{
                color: "white",
              }}
              className="icon-btn"
            >
              <FaSearch />
            </button>
            <button
              style={{
                color: "white",
              }}
              className="icon-btn"
            >
              <FaHeart />
            </button>
            <button
              style={{
                color: "white",
              }}
              className="icon-btn"
            >
              <FaShoppingCart />
            </button>
            <button
              style={{
                color: "white",
              }}
              className="icon-btn"
            >
              <FaUserAlt />
            </button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
