import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {  useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { editUser } from "../features/userSlice";

const UpdateUser = () => {

   const [userUpdate, setUserUpdate] = useState([]);
   const dispatch = useDispatch();

   const navigate = useNavigate();
//    const dispatch = useDispatch();
   const { id } = useParams();
  const {
    users: userList,
   } = useSelector((store) => store?.user);


   useEffect(() => {
     if(id){
        const singleUser = userList.filter((user) => user.id === id);
        setUserUpdate(singleUser[0])
     }

   }, [id])
   
   const updateData = (e) =>{
    setUserUpdate({...userUpdate, [e.target.name] : e.target.value });

   }

   const handleUpdate = (e) =>{
    e.preventDefault();
    dispatch(editUser(userUpdate))
    navigate("/read")

   }
  return (
    <Container>
      <Row  className="mt-5 bg-dark p-5">
        <Col md={{ span: 6, offset: 3 }}>
        <h2 className="my-2 text-white w-100 d-block">Update Data</h2>
          <Form onSubmit={handleUpdate}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white mr-5">Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Name" value={userUpdate && userUpdate.name} onChange={updateData} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white mr-5">Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email"  value={userUpdate && userUpdate.email}  onChange={updateData} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white mr-5">Age</Form.Label>
              <Form.Control type="number" name="age" placeholder="Enter Age" value={userUpdate && userUpdate.age} onChange={updateData} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white mr-5">Male</Form.Label>
              <Form.Check
              
                label="1"
                name="gender"
                type="radio"
                value="Male"
                onClick={updateData}
                checked={userUpdate && userUpdate.gender === "Male"}
                
              />
              <Form.Label className="text-white mr-5">Female</Form.Label>
              <Form.Check
                
                label="1"
                name="gender"
                type="radio"
                value="Female"
                checked={userUpdate && userUpdate.gender === "Female"}
                onClick={updateData}
                
              />
            </Form.Group>
            <Button variant="primary" className="w-100 text-center w-40" type="Update">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateUser;
