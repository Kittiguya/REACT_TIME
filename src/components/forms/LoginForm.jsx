
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container"
import { Navigate } from "react-router-dom";



export default function LoginForm() {

    const [userLogin, setUserLogin] = useState({ username: '', password: '' });
    const [loginStatus, setLoginStatus] = useState(null);
    
    useEffect(() => {
        if (userLogin.username) {
            loginUser();
            setUserLogin({ username: '', password: '' })
        }
    }, [userLogin]);

    async function loginUser(userOb) {
        const res = await fetch('http://127.0.0.1:5000/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userOb)
        })
        if (res.ok) {
            const data = await res.json();
            console.log(data.access_token);
            Navigate('/user')
        } else console.error("Failed to login")
    }


    function handleLoginFormSubmit(e) {
        e.preventDefault();
        const loginElement = e.currentTarget;
        const loginForm = new FormData(loginElement);
        console.log(loginForm.get('username'));
        setUserLogin(Object.fromEntries('loginForm'));
    }

    return (
        <Container>
            <h3>Log In Page</h3>
            <form action="" onSubmit={handleLoginFormSubmit}>
                <label htmlFor="username">Username</label><br />
                <input type="text" name="username" /><br />

                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" /><br />

                <input type="submit" name="Login" value="Login" />
            </form>
            {loginStatus && (
                <Alert variant={loginStatus.type === 'success' ? 'success' : 'danger'}>
                    {loginStatus.message}
                </Alert>
            )}
        </Container>
    )
}