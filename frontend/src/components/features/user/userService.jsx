import axios from 'axios'

const API_URL = 'http://localhost:4000/user/register'

// register user 
const register = async (userData) => {
    const res = await axios.post(API_URL, userData)

    if(res.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return res.data
}

//login user
const login = async (userData) => {
  const res = await axios.post(API_URL, userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return res.data;
};

// logout
const logout = async () => {
    localStorage.removeItem('user')
}

const userService = [
    register,
    login,
    logout
]

export default userService