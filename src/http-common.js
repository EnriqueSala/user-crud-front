import axios from "axios";

export default axios.create({
  baseURL: "http://3.129.248.218:8080/crudUser/api",
  headers: {
    "Content-type": "application/json"
  },
  auth:{
    username: "Miguel",
    password: "test123"
}
});