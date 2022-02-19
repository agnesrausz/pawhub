export const Logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userID');
    localStorage.removeItem('userName');
}