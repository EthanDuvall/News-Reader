function getArticles(apiKey) {
console.log(apiKey)
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    .then((res) => {
      if (!res.ok) {
        console.log("Failed to fetch articles");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
}


export {getArticles}