import Body from "../components/Body"

export default function FeedPage() {
  return (
    <Body sidebar={true}>Clips Page</Body>
  )
}


// this in theory for the start should display all the clips on platform
// When its done;
// IF you are logged in, itll display the clips you have connected. 
// IF NOT LOGGED IN:
// itll display the home page clips. With a warning asking you to import your own
// We can comment on them if we want for purposes of discussions. 
// 