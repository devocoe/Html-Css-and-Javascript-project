const limit = 5;
let postCount = 1;
let page = 1;
const container = document.querySelector(".container");

const getData = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}?_page=${page}`
  );
  const data = await response.json();
  setData(data);
};

const setData = (data) => {
  data.map((post) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
    <h3 class="title">${postCount++}. ${post.title}</h3>
    <p class="body">
     ${post.body}
    </p>
    <button class="btn">Read more</button>
    </div>`
    );
  });
  page++;
};

getData();

document.addEventListener("scroll", (e) => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (clientHeight + scrollTop >= scrollHeight - 5) {
    getData();
  }
});
