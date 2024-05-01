import { useState, useHistory } from "react";
import { Alert, Container } from 'react-bootstrap';
import axios from "axios";

export default function RegisterForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: ""
  });
  const [registrationStatus, setRegistrationStatus] = useState({ type: 'info', message: '' });

  

  async function registerUser() {
    try {
      const response = await axios.post("http://127.0.0.1:5000/users", user, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("Successful data send:", response.data);
      setRegistrationStatus({ type: 'success', message: 'User registered successfully!' });
      navigate('/login');
    } catch (error) {
      console.log("Error registering user:", error);
      setRegistrationStatus({ type: 'danger', message: 'Error registering user. Please try again later.' });
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch("http://127.0.0.1:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      console.log("Successful data send:", response.data);
      navigate('/login');
    } catch (error) {
      console.log("Error registering user:", error);
    }
  };
function navigate() {
      console.log(`Navigating to: ${'/login'}`);
      navigate('/login')
  }
 


  return (
    <Container>
      <h3>Register</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label><br />
        <input type="text" name="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} required={true} /><br />

        <label htmlFor="email">Email</label><br />
        <input type="text" name="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required={true} /><br />

        <label htmlFor="password">Password</label><br />
        <input type="password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required={true} /><br />

        <label htmlFor="first-name">First Name</label><br />
        <input type="text" name="first-name" value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })} /><br />

        <label htmlFor="last-name">Last Name</label><br />
        <input type="text" name="last-name" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} /><br />

        <input type="submit" name="Register" value="Register" />
      </form>
      {registrationStatus && (
        <Alert severity={registrationStatus.type === 'success' ? 'success' : 'error'}>
          {registrationStatus.message}
        </Alert>
      )}
    </Container>
  );
}
