const word1 = document.querySelector(".word1");

const word = "Goodbye";

fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    word1 = data[0].phonetic;
  });
