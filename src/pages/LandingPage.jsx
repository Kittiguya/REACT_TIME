import { Container } from "react-bootstrap"
import Body from "../components/Body"



export default function LandingPage() {
  return (
    <Container>
    <Body sidebar={false}>Home Page</Body>

    <p>This is an app that will be a template for similar uses</p>
    <h1>
      The purpose of this version is to have a user login/register, then they can pull
      api requests for clips of gameplay moments from their Medal Profile, 
      Medal clips should be sortable by most likes, views, comments, 
      most recent/new, genre, game title
      along with Steam Account information to display in an orderly manner. 
      Games, when displayed through the clips, or through the steam profile pull,
      will be linked to the appropriated store pages.
      Hopeful to add some developer information added onto the game info.
    </h1>
    </Container>
  )
}
