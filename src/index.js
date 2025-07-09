import "./css/styles.css";

function init() {
  const gif = document.querySelector(".gif");
  const search = document.querySelector("input");
  const button = document.querySelector("button");

  async function getGif(search) {
    const params = new URLSearchParams({
      api_key: "UQyFRNAekSv60PgMGMIlg6od81BbbjXp",
      s: search,
    });
    const url = `https://api.giphy.com/v1/gifs/translate?${params}`;
    try {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      if (data.data.images === undefined) {
        getGif("Not Found");
      } else {
        console.log(data.data.images);
        gif.src = data.data.images.original.url;
      }
    } catch (error) {
      console.log(error);
    }
  }

  button.addEventListener("click", () => {
    getGif(search.value);
  });

  getGif("start");
}

init();
