// This is the page that when you click "my profile", or your "name" will
// redirect you to your page to see your profile/clips/posts
import React, { useState, useEffect } from 'react';

const MyPage = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from API or set userData with stored data
    const fetchData = async () => {
      try {
        // Example API call using fetch
        const response = await fetch('http://localhost:5173/user');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData(); // Call the fetchData function when component mounts
  }, []);

  return (
    <div className="MyPage">
      <h1>Welcome to My Page</h1>
      {user ? (
        <div className="user-profile">
          <h2>{user.username}</h2>

          {/* Render other user data as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default MyPage;