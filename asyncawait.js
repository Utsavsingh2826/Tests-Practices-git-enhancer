// async-await.js

function fetchData() {
  return new Promise(res => setTimeout(() => res("Fetched data!"), 1000));
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();
