const input = document.getElementById('search-input');

// if in search page add key up event to the search input
if (document.getElementById('search-input')) {
  input.addEventListener('keyup', (event) => {
    const container = document.querySelector(".cards-container");
    container.innerHTML = "";
    const query = event.currentTarget.value;
    const text = document.querySelector(".text");

    // If there's a query in the input
    if (query) {
      text.innerHTML = "";
      text.insertAdjacentHTML('beforeend', '<h3 style="margin: 16px 0 8px 0;">Click on the images below to read the full article</h3>');

      const url = 'http://newsapi.org/v2/everything?' +
            `q=${query}&` +
            'from=2021-01-30&' +
            'sortBy=popularity&' +
            'apiKey=ea52fc1b7d464d92bf6dcad699c04ef5';

      // fetch api results for input query
      fetch(url)
        .then(response => response.json())
        .then((data) => {
          const articles = data.articles;

          // Creation of a card per article
          articles.forEach((article) => {
            // if the article doesn't have an image we add news-background.jpg
            let imageUrl = '';
            // console.log(article.url);
            if (article.urlToImage) {
              imageUrl = article.urlToImage;
            } else {
              imageUrl = 'images/news-background.jpg';
            }
            const cardHtml =
              `<a href=${article.url} target="_blank">
                <div class="card-search">
                  <img src=${imageUrl} />
                  <div class="card-search-info">
                    <h2><mark style="background-color: #18396A; color: white;">${article.title}</mark></h2>
                    <p>${article.description}</p>
                  </div>
                </div>
              </a>`;

            // Inserting card within the cards-container
            container.insertAdjacentHTML('beforeend', cardHtml);
          });
        });
    } else {
      text.innerHTML = "";
    }
  });
}
