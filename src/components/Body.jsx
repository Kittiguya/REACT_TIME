import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Sidebar from "./Sidebar"

function Body({children}) {
  return (
    <Container>
        <Stack>
            <Sidebar />
            {children}
        </Stack>
    </Container>
  )
}

export default Body;
