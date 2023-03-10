import axios from 'axios'

const API_URL = "http://localhost:4000/user";

// register user 
const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    console.log(response.data)

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
}

//login user
const login = async (loginData) => {
    const response = await axios.post(`${API_URL}/login`, loginData);
    console.log(response.data)

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
}
// logout
const logout = async () => {
    localStorage.removeItem('user')
}

const userService = {
    register,
    login,
    logout
}

export default userService