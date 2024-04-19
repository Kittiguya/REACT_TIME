import Container from "react-bootstrap/Container";
import  SinglePost from "./SinglePost"


export default function Posts() {
    
  const [ posts, setPosts] = useState([]);

  useEffect(() => {
    async () => {
        await getPosts();
    }
  }, [])

  async function getPosts(){
    const res = await fetch('')
    if (res.ok){
      const data = await res.json();
      console.log(data);
      setPosts(data);
    } else console.error("Failed to load Posts")
  }



  return (
    <Container>
        <h2>Posts</h2>

        {posts.map((post, i) => {
                return post.author.username !== 'foo' && <SinglePost post={post} key={i}/>
    })} 
    </Container>
  )
}


