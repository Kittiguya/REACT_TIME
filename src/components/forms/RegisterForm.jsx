import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function RegisterForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const [registrationStatus, setRegistrationStatus] = useState({
    type: "info",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch("http://127.0.0.1:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        console.log("Successful data send:", response.data);
        setRegistrationStatus({
          type: "success",
          message: "User registered successfully!",
        });
        setShowModal(true);
        navigate('/login');
      } else {
        setRegistrationStatus({
          type: "danger",
          message: "Error registering user. Please try again later.",
        });
      }
    } catch (error) {
      console.log("Error registering user:", error);
      setRegistrationStatus({
        type: "danger",
        message: "Error registering user. Please try again later.",
      });
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>{registrationStatus.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <h3>Register</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" name="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} required={true}/>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" name="email" value={user.email}  onChange={(e) => setUser({ ...user, email: e.target.value })}  required={true}/>
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required={true}/>
        <br />
        <label htmlFor="first-name">First Name</label>
        <br />
        <input type="text" name="first-name" value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })}/>
        <br />
        <label htmlFor="last-name">Last Name</label>
        <br />
        <input type="text" name="last-name" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })}/>
        <br />
        <input type="submit" name="Register" value="Register" />
      </form>
    </Container>
  );
}