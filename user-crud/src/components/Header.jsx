import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../features/userSlice";

const Header = () => {
  const [searchData, setSearchData] = useState("")
  const dispatch = useDispatch();
  const {users:userList} = useSelector((store) => store?.user);
  useEffect(() => {
     dispatch(searchUser(searchData));
  }, [searchData])
  
  return (
    <>
       <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#" style={{color: "#fff"}}>RTK CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" style={{color: "#fff"}}>Create Post</Nav.Link>
            <Nav.Link href="/read" style={{color: "#fff"}}>All Post {userList.length !== 0 ? <span className="post-counter"> - {userList.length}</span>  : ""}</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
              onChange={(e) => setSearchData(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
