const axios = require("axios");

const getData = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data: users } = await axios.get(url);

  return users;
};

async function* getUserByPost(users) {
  const url = "https://jsonplaceholder.typicode.com/posts";

  for (let i = 0; i < users.length; i++) {
    const { data: posts } = await axios.get(`${url}?userId=${users[i].id}}`);

    yield posts;
  }
}

getData()
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  });
