import Body from "../components/Body"
import GameClipsComponent from "../components/GameClips";


export default function FeedPage() {
  return (
    <Body sidebar={true}>
      <GameClipsComponent />
    </Body>
  );
}




// this in theory for the start should display all the clips on platform
// When its done;
// IF you are logged in, itll display the clips you have connected. 
// IF NOT LOGGED IN:
// itll display the home page clips. With a warning asking you to import your own
// We can comment on them if we want for purposes of discussions. 
// 