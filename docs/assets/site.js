const nav = document.querySelector(".nav");
const menuButton = document.querySelector(".menu-button");
const searchButton = document.querySelector(".search-button");
const searchPanel = document.querySelector(".search-panel");
const searchInput = document.querySelector("#site-search");

menuButton?.addEventListener("click", () => {
  nav?.classList.toggle("open");
});

searchButton?.addEventListener("click", () => {
  searchPanel?.classList.toggle("open");
  if (searchPanel?.classList.contains("open")) {
    searchInput?.focus();
  }
});

searchInput?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  const query = searchInput.value.trim();
  if (!query) return;
  const target = `https://www.google.com/search?q=${encodeURIComponent(`${query} site:yjianglab.github.io/yjianglabcn`)}`;
  window.open(target, "_blank", "noopener");
});
