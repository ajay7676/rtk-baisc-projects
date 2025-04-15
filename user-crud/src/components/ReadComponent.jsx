import React, { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, readUser } from "../features/userSlice";
import ViewModal from "./ViewModal";
import { useNavigate } from "react-router";


const ReadComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkRadiobtn, setcheckRadiobtn] = useState("")

  const [viewUser, setViewUser] = useState(false);
  const[user , setUser] = useState("")

  const {
    loading,
    status,
    searchData,
    users: userList,
  } = useSelector((store) => store?.user);
  useEffect(() => {
    dispatch(readUser());
  }, []);

  if (loading);
  const showViewModal = (userinfo) =>{
    setViewUser(true)
    setUser(userinfo)
  }
  const hideViewModal = () =>{
    setViewUser(false)
  }
  if(loading)  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        fontSize: "50px",
      }}
    >
      <h1 className="text-black">{status}</h1>
    </div>
  );
  return (
    <>
      {(viewUser) ? <ViewModal userData={user}  handleClose={hideViewModal} /> : null}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="radio-buttons-con">
            <Form.Group className="mb-3 d-flex " controlId="formBasicEmail">
              <Form.Label className="d-block mr-2">All</Form.Label>
              <Form.Check  name="gender" type="radio" checked={checkRadiobtn === ""} onChange={(e) => setcheckRadiobtn(e.target.value)} />
              <Form.Label className="">Male</Form.Label>
              <Form.Check  name="gender" type="radio" value="Male" checked={checkRadiobtn === "Male"} onChange={(e) => setcheckRadiobtn(e.target.value)} />
              <Form.Label className="">Female</Form.Label>
              <Form.Check  name="gender" type="radio" value="Female" checked={checkRadiobtn === "Female"} onChange={(e) => setcheckRadiobtn(e.target.value)}/>
            </Form.Group>
            </div>
            {userList &&
                 userList
                 .filter((user) =>{
                  if(searchData.length === 0){
                    return user;
                  }else{
                     return user.name.toLowerCase().includes(searchData.toLowerCase())
                  }
                 })
                 .filter((user) =>{
                  if(checkRadiobtn === "Male"){
                    return user.gender === checkRadiobtn;
                  }else if (checkRadiobtn ==="Female") {
                    return user.gender === checkRadiobtn;
                  }else{
                    return user;
                  }
                   
                 })
                 .map((user) => {
                return (
                  <Card
                    key={user.id}
                    className="bg-dark text-white my-3 "
                    style={{ width: "100%" }}
                  >
                    <Card.Body className="text-center">
                      <Card.Title>{`Name : ${user.name}`}</Card.Title>
                      <h6>{`Email : ${user.email}`}</h6>
                      <h6>{`Age : ${user.age}`}</h6>
                      <h6>{`Gender : ${user.gender}`}</h6>
                      <div className="d-flex justify-content-evenly mt-3 ">
                        <Button variant="primary" onClick={() => navigate(`/edit/${user.id}`) }>Edit</Button>
                        <Button variant="success" onClick={() =>showViewModal(user)}>View</Button>
                        <Button variant="danger" onClick={() => dispatch(deleteUser(user.id))}>Delete</Button>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadComponent;
