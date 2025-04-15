import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userSlice";
import { useNavigate } from "react-router";

const FormInupt = () => {

   const [users, setUsers] = useState({});

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const handleInput = (e) =>{
    setUsers ({...users ,[e.target.name]: e.target.value})

   }

   const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createUser(users))
    navigate("/read")

   }
  return (
    <Container>
      <Row  className="mt-5 bg-dark p-5">
        <Col md={{ span: 6, offset: 3 }}>
        <h2 className="my-2">Fill Data</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white mr-5">Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Name" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white mr-5">Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email"  onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white mr-5">Age</Form.Label>
              <Form.Control type="number" name="age" placeholder="Enter Age"  onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white mr-5">Male</Form.Label>
              <Form.Check
              
                label="1"
                name="gender"
                type="radio"
                value="Male"
                onClick={handleInput}
                
              />
              <Form.Label className="text-white mr-5">Female</Form.Label>
              <Form.Check
                
                label="1"
                name="gender"
                type="radio"
                value="Female"
                onClick={handleInput}
                
              />
            </Form.Group>
            <Button variant="primary" className="w-100 text-center w-40" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormInupt;
