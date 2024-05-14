
import Container from "react-bootstrap/Container";
import { useState, createContext } from "react";


import Header from "./components/Header";
import FeedPage from "./pages/FeedPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SingleUserPage from "./pages/SingleUserPage";
import UsersPage from "./pages/UsersPage";
import { Route, Routes } from "react-router-dom";
import MyPage from "./pages/MyPage";
import LoginForm from "./components/forms/LoginForm";



export const LoginContext = createContext(null)

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };



  return (
    <Container fluid className='app'>
      <LoginContext.Provider value={handleLogin}>
        <Header users={loggedInUser} />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/user/:username' element={<SingleUserPage />} />
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/MyPage' element={<MyPage />} />

        </Routes>
      </LoginContext.Provider>



    </Container>
  )

}
