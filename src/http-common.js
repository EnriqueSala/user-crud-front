import axios from "axios";

export default axios.create({
  baseURL: "https://user-crud-production-1809.up.railway.app/api",
  headers: {
    "Content-type": "application/json"
  },
  auth:{
    username: "Miguel",
    password: "test123"
}
});