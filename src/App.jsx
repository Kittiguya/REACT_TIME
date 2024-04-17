import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";

import Gamers from "./components/Gamers";
import Header from "./components/Header";
import Posts from "./components/Posts";
import RegisterForm from './components/forms/RegisterForm';
import Sidebar from "./components/Sidebar";


export default function App(){

  

 
  return (
  <Container className='app'>
    <Header />
    <Stack direction='vertical' >
    <Sidebar />

    <Gamers />
   


    </Stack>
    
    <RegisterForm />
    


    <Posts />
  </Container>
  )

}
