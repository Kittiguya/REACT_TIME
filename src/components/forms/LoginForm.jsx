
import { useState, useContext, createContext } from "react";
import Container from "react-bootstrap/Container"
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal"; 
import Button from 'react-bootstrap/Button';



export default function LoginForm() {
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({ username: '', password: '' });
    const [showModal, setShowModal] = useState(false);
    const [loginStatus, setLoginStatus] = useState(null);

    async function loginUser(userOb) {
        try {
            const res = await fetch('http://localhost:5173/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userOb)
            });
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem('accessToken', data.access_token);
                setShowModal(true);
                navigate('/MyPage');
            } else {
                console.error("Failed to login:", data.message);
                setLoginStatus(data.message);
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setLoginStatus("Error logging in");
        }
    }

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();
        loginUser(userLogin);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>You've successfully logged in!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleModalClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
            <Container>
                <h1>Please login to Continue!</h1>
                <h3>Log In Page</h3>
                <form onSubmit={handleLoginFormSubmit}>
                    <label htmlFor="username">Username</label><br />
                    <input
                        type="text"
                        name="username"
                        value={userLogin.username}
                        onChange={(e) => setUserLogin({ ...userLogin, username: e.target.value })}
                    /><br />

                    <label htmlFor="password">Password</label><br />
                    <input
                        type="password"
                        name="password"
                        value={userLogin.password}
                        onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
                    /><br />

                    <input type="submit" value="Login" />
                </form>
            </Container>
        </>
    );
}
