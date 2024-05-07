
import { useState } from "react";
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
        const res = await fetch('http://127.0.0.1:5000/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userOb)
        })
        if (res.ok) {
            const data = await res.json();
            localStorage.setItem('accessToken', data.access_token);
            navigate('/MyPage')
        } else console.error("Failed to login")
    };


    function handleLoginFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password')
        setUserLogin({ username, password });
        loginUser({ username, password });
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
                <Button cariant="primary" onClick={handleModalClose}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
        <Container>
        <p1> Please login to Continue!</p1>
            <h3>Log In Page</h3>
            <form action="" onSubmit={handleLoginFormSubmit}>
                <label htmlFor="username">Username</label><br />
                <input type="text" name="username" /><br />

                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" /><br />

                <input type="submit" name="Login" value="Login" />
            </form>
        </Container>
        </>
    )
}