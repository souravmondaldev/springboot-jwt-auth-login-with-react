import axios from "axios";

const API_URL = "http://localhost:9001/auth/v1/";

class AuthService {
  login(username, password) {
     console.log("I am axios");
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
       
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        // const user = JSON.parse(localStorage.getItem("user"));
        console.log(JSON.stringify(response.data));
        // console.log(typeof(user.accessToken));
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
