const button = document.getElementById("btn");
button.addEventListener("click", function () {
  function displayQuote() {
    fetch("https://favqs.com/api/qotd")
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("main-content").innerHTML = `
            <h3 id="quote" class="quote">${data.quote.body}</h3>
            <h2 class="author">- <span id="author">${data.quote.author}</span></h2>
        `
      });
  }
  displayQuote();
  document.getElementById("generate-box").style.display = "block";
});
