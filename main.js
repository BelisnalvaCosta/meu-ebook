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
  // garantir que currentPage não exceda o último índice
  if (currentPage < pages.length - 1) currentPage++;
  updateBook();
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentPage > 0) currentPage--;
  updateBook();
});

updateBook();