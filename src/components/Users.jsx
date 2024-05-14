import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';

const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);


  async function getUsers(){
    const res = await fetch('http://127.0.0.1:5000/users',{})
    if (res.ok){
      const data = await res.json();
      setUsers(data);
    } else console.error("Failed to load Users");
  }
  if(users.length === 0) return <Spinner />
  

  return (
    <div>
      <h1>
        {users.map((users, i) => <p key={i}>{users.username}</p>)}
      </h1>
    </div>
  )
}

export default Users

