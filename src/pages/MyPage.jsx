// This is the page that when you click "my profile", or your "name" will
// redirect you to your page to see your profile/clips/posts
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkUserAuthentication, fetchUserData } from '../assets/utils';
import { logoutUser } from '../assets/LogoutService';
import Users from '../components/Users';

const MyPage = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          navigate('/login');
          return;
        }

        setIsLoading(true);
        setError(null);

        const response = await fetch('https://api.stytch.com/v1/public/users', {
          headers: {
            'Content-Type': 'application/json',
            'Public-Medal-API-Key': 'pub_PR3i0lmK7t8zQJdjEsiwLCDiSTODU0jx',
          },
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        setUserData(data);
      } catch (error) {
        setError(`Error fetching user data: ${error.message}`);
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="MyPage">
      <h1>Welcome to {Users ? `${Users.username}'s Page` : 'My Page'}</h1>
      {Users ? (
        <div className="user-profile">
          <h2>{Users.username}</h2>
        </div>
      ) : (
        <h3>This is being built out. Check back later!</h3>
      )}
    </div>
    
    
  );
};

export default MyPage;