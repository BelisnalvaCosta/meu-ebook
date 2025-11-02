const pages = document.querySelectorAll(".page");
let currentPage = 0;

function updateBook() {
  pages.forEach((page, index) => {
    if (index < currentPage) {
      page.classList.add("flipped");
      page.style.zIndex = index;
    } else {
      page.classList.remove("flipped");
      page.style.zIndex = pages.length - index;
    }
  });
}

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentPage < pages.length) currentPage++;
  updateBook();
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentPage > 0) currentPage--;
  updateBook();
});

updateBook();