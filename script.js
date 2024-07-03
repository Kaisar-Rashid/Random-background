document.querySelector(".btn").addEventListener("click", () => {
  const main = document.querySelector(".section");
  main.style.backgroundColor = randomColorGenrator();

  document.getElementById("code").textContent = randomColorGenrator();
});

function randomColorGenrator() {
  let color = "0123456789abcdef";
  let hashtag = "#";
  let random = "";
  let generator;

  for (let i = 0; i < 6; i++) {
    random += color[Math.floor(Math.random() * 16)];
    generator = hashtag + random;
  }
  return generator;
}
