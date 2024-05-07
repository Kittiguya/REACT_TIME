
export const checkUserAuthentication = () => {
    const token = localStorage.getItem('authToken');
    return !!token;
  };
  
  export const fetchUserData = async () => {
    try {
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
  
      return data;
    } catch (error) {
      throw new Error('Error fetching user data');
    }
  };


