import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import style from "./Navbar.module.css";

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          href="#home"
          className={style.navbarBrandBg}
        ></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2">
            <Nav.Link
              href="#home"
              className={`${style.navLinkUpgrade} ${style.navLink} ${
                activeMenu == "home" ? style.active : ""
              }`}
              onClick={() => setActiveMenu("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#link"
              className={`${style.navLinkUpgrade} ${style.navLink} ${
                activeMenu == "addRecord" ? style.active : ""
              }`}
              onClick={() => setActiveMenu("addRecord")}
            >
              Add Record
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
