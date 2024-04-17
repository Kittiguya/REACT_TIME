import { useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";


export default function RegisterForm() {

  const [ user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5173/", user);
      console.log("Server response:", response.data);
    } catch (error){
    console.log("Error registering user:", error);
    }
    
  };

  return (
    <Container>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label><br />
        <input type="text" name="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} /><br />
        
        <label htmlFor="email">Email</label><br />
        <input type="text" name="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} /><br />
        
        <label htmlFor="password">Password</label><br />
        <input type="password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} /><br />
        
        <label htmlFor="confirm-password">Confirm Password</label><br />
        <input type="password" name="confirm-password" value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} /><br />
        
        <label htmlFor="first-name">First Name</label><br />
        <input type="text" name="first-name" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} /><br />
        
        <label htmlFor="last-name">Last Name</label><br />
        <input type="text" name="last-name" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} /><br />

        <input type="submit" name="Register" value="Register" />
      </form>
    </Container>
  );
}
