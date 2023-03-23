import axios from "axios";

export default axios.create({
  baseURL: "https://back.jorgesala.site/crudUser/api",
  headers: {
    "Content-type": "application/json"
  },
  auth:{
    username: "Miguel",
    password: "test123"
}
});