import Body from "../components/Body"

import SingleUser from "../components/SingleUser"



function SingleUserPage() {

const {username} = userParams();


  useEffect(()=>{
    (async ()=>{
      await getUserData();
    })()
  }, [])

  async function getUserData(){
  const response = await fetch('http://localhost:5173/user/'.concat(username))
  if (response.ok){
    const userData = await response.json();
    console.log(userData);
  }}



  return (
    <Body sidebar>
      <Container>
      <h2>{username}'s Page</h2>
        <SingleUser />
      </Container>
    </Body>
  )
}
export default SingleUserPage