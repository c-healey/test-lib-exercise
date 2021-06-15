import axios from "axios";

async function userAxios(id) {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return result.data;
}

export { userAxios as user };
