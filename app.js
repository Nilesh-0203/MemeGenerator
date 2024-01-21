const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeTitle = document.querySelector(".meme-title");
const memeImg = document.querySelector(".meme-generator img");
const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url, title, author) => {
  memeTitle.innerHTML = title;
  memeImg.setAttribute("src", url);
  memeAuthor.innerHTML = `Meme by : ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);
generateMeme();
