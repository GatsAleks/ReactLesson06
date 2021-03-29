import axios from "axios";

export default axios.create({
  baseURL: "https://6043773da20ace001728e1de.mockapi.io/users",
  headers: {
    "Content-Type": "application/json",
  },
});
