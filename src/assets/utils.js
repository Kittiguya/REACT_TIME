// this is my function to check for user Auth
export const checkUserAuthentication = () => {
    const token = localStorage.getItem('authToken');
    return !!token;
  };

  
  //this is making a pull request to my api source and asking it to return data in a format
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


  // --- this is my api key generator--
export const generateApiKey = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-='
  let apiKey = '';
  const keyLength = 32;

  for (let i = 0; i < keyLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    apiKey += characters.charAt(randomIndex);
  }

  return apiKey;
}