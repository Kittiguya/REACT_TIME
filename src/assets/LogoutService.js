export const logoutUser = () => {
    localStorage.removeItem('accessToken');
  }